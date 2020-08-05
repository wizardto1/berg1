import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-survey4',
  templateUrl: './survey4.component.html',
  styleUrls: ['./survey4.component.css']
})
export class Survey4Component implements OnInit {
flag;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore4(flag){
    this.scoresService.setScore4(flag)
    this.scoresService.setButton4(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore4();
this.buttonDisabled=this.scoresService.getButton4()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}