import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';

@Component({
  selector: 'app-survey10',
  templateUrl: './survey10.component.html',
  styleUrls: ['./survey10.component.css']
})
export class Survey10Component implements OnInit {
flag;
  buttonDisaabled:boolean=false;
  
  constructor(private scoresService: ScoresService) { }

  setScore10(flag){
    this.scoresService.setScore10(flag)
    this.scoresService.setButton10(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore10()
this.buttonDisabled=this.scoresService.getButton10()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}