import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AnimalsComponent } from './1-animals.component';
import { BirdsComponent } from './2-birds.component';
import { FishesComponent } from './3-fishes.component';

@NgModule({
  declarations: [AppComponent, AnimalsComponent, BirdsComponent, FishesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
