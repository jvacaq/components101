import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log(this._dataService.cars);
    this.someProperty = this._dataService.myData();
  }

  someProperty:string = '';
  constructor(private _dataService: DataService) {
  }
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
  titleStyle: string = 'red';
  titleStyleCondition: boolean = true;
  titleStyles: Object = {
    'color': 'red',
    'font-size':'6em'
  };

  myEvent($event: MouseEvent) {
    console.log($event);
  }
}
