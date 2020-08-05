import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service'; 

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  score1;
  score2;
  score3;
  score4;
  score5;
  score6;
  score7;
  score8;
  score9;
  score10;
  score11;
  score12;score13;score14;
  total;max:number=56;

  constructor(private scoresService: ScoresService) { }

  ngOnInit() {
    this.score1=this.scoresService.getScore1();
    this.score2=this.scoresService.getScore2();
    this.score3=this.scoresService.getScore3();
    this.score4=this.scoresService.getScore4();
    this.score5=this.scoresService.getScore5();
    this.score6=this.scoresService.getScore6();
    this.score7=this.scoresService.getScore7();
    this.score8=this.scoresService.getScore8();
    this.score9=this.scoresService.getScore9();
    this.score10=this.scoresService.getScore10();
    this.score11=this.scoresService.getScore11();
    this.score2=this.scoresService.getScore12();
    this.score2=this.scoresService.getScore13();
    this.score2=this.scoresService.getScore14();

    
  }

}