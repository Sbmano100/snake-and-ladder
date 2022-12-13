import { formatNumber } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'snakeladder';
  p1!:any[]
  p2!:any[]
  same:boolean=false;
  //initial=true;
  constructor() {}
  ngOnInit(){
    this.board();
  //  this.initial=false
   // console.log(this.initial)
    //console.log(this.d[0],this.d[1]);
 }
 
arr = new Array();

board(){
let num=100;
   // creating two dimensional array
   for (let i = 0; i< 10; i++) {
       for(let j = 0; j< 10; j++) {
           this.arr[i] = [];
       }
   }

   for (let i = 0; i< 10; i++) {
     if(i%2!=0){
       for(let j =9; j>=0; j--) {
         this.arr[i][j] = num;
         num--;
     }
     }
     else{
       for(let j = 0; j< 10; j++) {
         this.arr[i][j] = num;
         num--;
     }

     }
     
 }
 //console.log(this.arr);
 } 
 p1pos(a:number){
 if(a==this.arr[this.p1[0]][this.p1[1]]){
  //this.initial=false
  return true;
 }
 return false;
 }

 p2pos(a:number){
  if( a==this.arr[this.p2[0]][this.p2[1]]){
    //this.initial=false
  return true;
 }
 return false;
 }

 snackcheck(st : number){
  if(st== 76 || st ==42){
    return true;
  }
  return false;
}

laddercheck(lt : number){
  if(lt == 23 || lt == 67){
    return true;
  }
  return false;
}
  samepos(a:number){
    if((a==this.arr[this.p1[0]][this.p1[1]]) && (a==this.arr[this.p2[0]][this.p2[1]])){
    return true;
    }
    else
    return false;
   }

}
