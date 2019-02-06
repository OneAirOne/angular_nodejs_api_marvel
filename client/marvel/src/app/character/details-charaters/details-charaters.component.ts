import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-details-charaters',
  templateUrl: './details-charaters.component.html',
  styleUrls: ['./details-charaters.component.css']
})
export class DetailsCharatersComponent implements OnInit {

  character: any = null;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    console.log('getCharacter');
    this.activatedRoute.params.forEach((param: Params) => {
      const characterId = param['characterId'];
      this.characterService.getCharacter(characterId)
        .subscribe(character => this.character = character.data.results[0]);
    });
  }

  goBack() {
    window.history.back();
  }
}
