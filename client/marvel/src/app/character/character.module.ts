import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { CharacterService } from './character.service';
import { DetailsCharatersComponent } from './details-charaters/details-charaters.component';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListCharactersComponent, DetailsCharatersComponent, LoaderComponent],
  providers: [CharacterService],
})
export class CharacterModule { }
