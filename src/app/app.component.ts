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
  titleClass: any = 'red-title';
  blueTitle: boolean = true;
  titleClasses: Object = {
    'red-title':true,
    'bigger-title': true
  };

  myEvent($event: MouseEvent) {
    console.log($event);
  }
}
