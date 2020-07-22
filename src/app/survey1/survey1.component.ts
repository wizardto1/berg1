import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.component.html',
  styleUrls: ['./survey1.component.css']
})
export class Survey1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class Name {

  constructor(
    public first: string,
    public last: string,
  ) {  }

}