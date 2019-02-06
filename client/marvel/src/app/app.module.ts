import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// features modules
import { CharacterModule } from './character/character.module';
import { AppRoutingModule } from './/app-routing.module';
// import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoaderComponent
  ],
  imports: [
    BrowserModule,
    CharacterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
