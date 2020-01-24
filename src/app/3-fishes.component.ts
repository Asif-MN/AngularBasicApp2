import { Component } from "@angular/core";

@Component({
  selector: "fishes",
  template: `<div>
             Fishes:<br/> 
              <ul>
                <li *ngFor="let names of FishNames">{{names}}</li>
              </ul>
             </div>`,
  styles: ['div { color: #0080ff; font-size: small; }']
})

export class FishesComponent {
  FishNames = ["Shark", "Whale","Eel","Mackerel","Salmon"];
}