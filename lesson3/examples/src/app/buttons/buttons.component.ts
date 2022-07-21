import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   buttonState: boolean[] = [true, true, true]
   jokeHover: boolean = true
   catchMe: boolean[] = [false, true, true]

   constructor() { }

   ngOnInit() { }

   changeInactive () {
      for (let i = 0; i < this.buttonState.length; i++) {
         this.buttonState[i] = true;
      }
      return this.buttonState;
   }

   catchRandom(button: boolean) {
      let index = Math.floor(Math.random() * 2);
      this.catchMe[index] = !this.catchMe[index];
      button = !button;
   }

}
