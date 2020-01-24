import { Component } from "@angular/core";

@Component({
  selector: "animals",
  template: `<div>
             Animals:<br/> 
              <ul>
                <li *ngFor="let names of AnimalNames">{{names}}</li>
              </ul>
             </div>`,
  styles: ['div { color: #ff8000; font-size: small; }']
})

export class AnimalsComponent {
  AnimalNames = ["Tiger", "Lion","Bear","Dog","Cat"];
}
