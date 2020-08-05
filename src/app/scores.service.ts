import { Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable()
export class ScoresService {
  scores=[];
  score1:any;
  score2:any;
  score3:any;
  score4:any;
  score5:any;
  score6:any;
  score7:any;
  score8:any;
  score9:any;
  score10:any;
  score11:any;
  score12:any;
  score13:any;
  score14:any;
  button1:boolean;
  button2:boolean;
  button3:boolean;
  button4:boolean;
  button5:boolean;
  button6:boolean;
  button7:boolean;
  button8:boolean;
  button9:boolean;
  button10:boolean;
  button11:boolean;
  button12:boolean;
  button13:boolean;
  button14:boolean;
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