import { Injectable } from '@angular/core';

@Injectable()
export class ScoresService {
  score1:any;
  score2:any;
  button1:boolean;
  total;
  max;
  setScore1(score){
    this.score1=score;
    console.log(this.score1)
  }
  getScore1(){
    return this.score1
  }
  setButton1(button){
    this.button1=button;
  }
  getButton1(){
    return this.button1;
  }
  constructor() { }

}