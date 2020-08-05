import { Injectable } from '@angular/core';

@Injectable()
export class ScoresService {
  score1;
  score2;
  setScore1(score){
    this.score1=score;
    console.log(this.score1)
  }
  getScore1(){
    return this.score1
  }
  constructor() { }

}