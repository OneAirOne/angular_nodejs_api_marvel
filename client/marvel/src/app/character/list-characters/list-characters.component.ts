import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  characters: any = null;

  constructor(
    private router: Router,
    private characterService: CharacterService,
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    console.log('getCharacters');
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters.data.results);
  }

  selectCharacter(character: any) {
    const link = ['characters', character.id];
    this.router.navigate(link);
  }

}
