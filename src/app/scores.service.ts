import { Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable()
export class ScoresService {
  scores:[any,any,any,any,any,any,any,any,any,any,any,any,any,any,any]=[5,5,5,5,5,5,5,5,5,5,5,5,5,5]
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
  total:number=0;
  max;
  setScore1(score){
    this.score1=score;
    this.scores[0]=score;
    console.log(this.scores[0])
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
  setScore2(score){
    this.score2=score;
    this.scores[1]=score;
  }
  getScore2(){
    return this.score2
    
  }
  setButton2(button){
    this.button2=button;
  }
  getButton2(){
    return this.button2;
  }
  setScore3(score){
    this.score3=score;
    this.scores[2]=score;
  }
  getScore3(){
    return this.score3
  }
  setButton3(button){
    this.button3=button;
  }
  getButton3(){
    return this.button3;
  }
   setScore4(score){
    this.score4=score;
    this.scores[3]=score;
  }
  getScore4(){
    return this.score4
  }
  setButton4(button){
    this.button4=button;
  }
  getButton4(){
    return this.button4;
  }
  setScore5(score){
    this.score5=score;
    this.scores[4]=score;
  }
  getScore5(){
    return this.score5
  }
  setButton5(button){
    this.button5=button;
  }
  getButton5(){
    return this.button5;
  }
  setScore6(score){
    this.score6=score;
    this.scores[5]=score;
  }
  getScore6(){
    return this.score6
  }
  setButton6(button){
    this.button6=button;
  }
  getButton6(){
    return this.button6;
  }
  setScore7(score){
    this.score7=score;
    this.scores[6]=score;
  }
  getScore7(){
    return this.score7
  }
  setButton7(button){
    this.button7=button;
  }
  getButton7(){
    return this.button7;
  }
  setScore8(score){
    this.score8=score;
    this.scores[7]=score;
  }
  getScore8(){
    return this.score8
  }
  setButton8(button){
    this.button8=button;
  }
  getButton8(){
    return this.button8;
  }
  setScore9(score){
    this.score9=score;
    this.scores[8]=score;
  }
  getScore9(){
    return this.score9
  }
  setButton9(button){
    this.button9=button;
  }
  getButton9(){
    return this.button9;
  }
  setScore10(score){
    this.score10=score;
    this.scores[9]=score;
  }
  getScore10(){
    return this.score10
  }
  setButton10(button){
    this.button10=button;
  }
  getButton10(){
    return this.button10;
  }
  setScore11(score){
    this.score11=score;
    this.scores[10]=score;
  }
  getScore11(){
    return this.score11
  }
  setButton11(button){
    this.button11=button;
  }
  getButton11(){
    return this.button11;
  }
  setScore12(score){
    this.score12=score;
    this.scores[11]=score;
  }
  getScore12(){
    return this.score12
  }
  setButton12(button){
    this.button12=button;
  }
  getButton12(){
    return this.button12;
  }
  setScore13(score){
    this.score13=score;
    this.scores[12]=score;
  }
  getScore13(){
    return this.score13
  }
  setButton13(button){
    this.button13=button;
  }
  getButton13(){
    return this.button13;
  }
  setScore14(score){
    this.score14=score;
    this.scores[13]=score;
    console.log(this.scores)
  }
  getScore14(){
    return this.score14
  }
  setButton14(button){
    this.button14=button;
  }
  getButton14(){
    return this.button14;
  }

  gettotal(){
    for (let i = 0; i < 14; i++){
      if (this.scores[i]=='skip'){
        this.max-=4;
      }
      else{
      this.total+=parseInt(this.scores[i]);
      console.log(this.total)}
    }
    console.log(this.total)
    return this.total;
  }
  getmax(){
    return this.max;
  }
  reset(){
  this.scores=[];
  this.score1=5;
  this.score2=5;
  this.score3=5;
  this.score4=5;
  this.score5=5;
  this.score6=5;
  this.score7=5;
 this.score8=5;
  this.score9=5;
  this.score10=5;
  this.score11=5;
  this.score12=5;
  this.score13=5;
  this.score14=5;
  this.button1=false;
  this.button2=false;
  this.button3=false;
  this.button4=false;
  this.button5=false;
  this.button6=false;
  this.button7=false;
  this.button8=false;
  this.button9=false;
  this.button10=false;
  this.button11=false;
  this.button12=false;
  this.button13=false;
  this.button14=false;
  this.total=0;
  this.max=56;
  return
  }





  constructor() { }

}