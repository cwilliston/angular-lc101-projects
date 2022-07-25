import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

  handleLand(rocketPic) {
    let result = window.confirm('The shuttle is landing. Landing gear engaged.');
    if (result) {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle has landed.';
      rocketPic.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  handleAbort(rocketPic) {
    let result = window.confirm('Do you really want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      rocketPic.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketPic, direction: string){
      if (direction === 'right') {
        let movement = parseInt(rocketPic.style.left) + 10 + 'px';
        rocketPic.style.left = movement;
        this.width = this.width + 10000;
    } else if (direction === 'left') {
        let movement = parseInt(rocketPic.style.left) - 10 + 'px';
        rocketPic.style.left = movement;
        this.width = this.width - 10000;
    } else if (direction === 'up') {
        let movement = parseInt(rocketPic.style.bottom) + 10 + 'px';
        rocketPic.style.bottom = movement;
        this.height = this.height + 10000;
    } else {
        let movement = parseInt(rocketPic.style.bottom) - 10 + 'px';
        rocketPic.style.bottom = movement;
        this.height = this.height - 10000;
    }
  }


    proximityWarning(){
      if (this.width < 10000 || this.width > 460000){
        this.color = 'orange';
      } else if (this.height < 10000 || this.height > 330000){
        this.color = 'orange';
      } else {
        this.color = 'blue';
      }
    }
}
