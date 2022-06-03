import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _cars = ['Ford', 'Chevrolet', 'Mazda'];

  myData(){
    return 'This is my data';
  }

  get cars(): string[] {
    return this._cars;
  }
}
