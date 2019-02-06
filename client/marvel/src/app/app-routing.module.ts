import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListCharactersComponent } from './character/list-characters/list-characters.component';
import { DetailsCharatersComponent } from './character/details-charaters/details-charaters.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: ListCharactersComponent },
  { path: 'characters/:characterId', component: DetailsCharatersComponent },
];

@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
