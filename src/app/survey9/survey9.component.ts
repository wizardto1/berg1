import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';

@Component({
  selector: 'app-survey9',
  templateUrl: './survey9.component.html',
  styleUrls: ['./survey9.component.css']
})
export class Survey9Component implements OnInit {
flag;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore9(flag){
    this.scoresService.setScore9(flag)
    this.scoresService.setButton9(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore9();
this.buttonDisabled=this.scoresService.getButton9()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }

}