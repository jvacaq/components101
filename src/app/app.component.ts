import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components101';
  myObject = {
    gender: 'male',
    age: 33,
    location: 'EC'
  };
  myArr = ['him', 'hers', 'yours'];
  myBoolean = true;
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  buttonStatus = false;

  myEvent($event: MouseEvent) {
    console.log($event);
  }
}
