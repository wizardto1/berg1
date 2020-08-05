import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';

@Component({
  selector: 'app-survey5',
  templateUrl: './survey5.component.html',
  styleUrls: ['./survey5.component.css']
})
export class Survey5Component implements OnInit {
flag;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore5(flag){
    this.scoresService.setScore5(flag)
    this.scoresService.setButton5(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore5();
this.buttonDisabled=this.scoresService.getButton5()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}