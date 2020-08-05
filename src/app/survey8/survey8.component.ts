import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';

@Component({
  selector: 'app-survey8',
  templateUrl: './survey8.component.html',
  styleUrls: ['./survey8.component.css']
})
export class Survey8Component implements OnInit {
flag;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore8(flag){
    this.scoresService.setScore8(flag)
    this.scoresService.setButton8(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore8();
this.buttonDisabled=this.scoresService.getButton8()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }

}