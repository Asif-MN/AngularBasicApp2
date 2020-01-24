import { Component } from "@angular/core";

@Component({
  selector: "birds",
  template: `<div>
             Birds:<br/> 
              <ul>
                <li *ngFor="let names of BirdNames">{{names}}</li>
              </ul>
             </div>`,
  styles: ['div { color: #ff0080; font-size: small; }']
})

export class BirdsComponent {
  BirdNames = ["Parrot", "Eagle","Peacock","Kiwi","Sparrow"];
}