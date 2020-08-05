import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ScoresService } from '../scores.service';

@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.component.html',
  styleUrls: ['./survey1.component.css']
})
export class Survey1Component implements OnInit {
  flag;
  buttonDisaabled:boolean=false;
  score1;
  constructor(private scoresService: ScoresService) { }

  setScore1(flag){
    this.scoresService.setScore1(flag)
    this.scoresService.setButton1(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore1()
this.buttonDisabled=this.scoresService.getButton1()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}

this.score1=event.target.value