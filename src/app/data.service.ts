import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 firstname = '';

  setFirstName(fname) {
    this.firstname=fname;
  }

  getFirstName() {
    return this.items;
  }
  constructor() { }

}