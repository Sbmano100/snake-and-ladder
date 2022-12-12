import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  b :number =9;
  r: number =0;
   pi !: number;
   pj !:number;
   points !:  number;
   disabled:boolean=true;
  onfun(pi : number,pj : number,rd: number,row: number,counter: number){
    this.r=row;
    this.points=counter;
    for (let i = 0; i < rd; i++) {
      if(this.r%2!=0 && pj<=this.b){
        pj=pj+1;
        this.points=this.points+1;
        this.pj=pj;
        this.pi=pi;
      }
      if(this.r%2!=0 && this.pj>this.b){
        this.r=this.r+1;
        pi=pi-1;
        pj=pj-1;
        this.pi=pi;
        this.pj=pj;
        continue;
      }
      if(this.r%2==0 && this.pj>=0){
        pj=pj-1;
        this.points=this.points+1;
        this.pj=pj;
        this.pi=pi;
      }
      if(this.r%2==0 && this.pj<0){
        this.r=this.r+1;
        pi=pi-1;
        pj=0;
        this.pi=pi;
        this.pj=pj;
        continue;
      }
      console.log("Iteration :"+i);
      console.log(pi);
      console.log(pj);
    }
  }

  
  // p1play(){
  //   this.disabled=false;
  // }
  // p2play(s:boolean){
  //    this.disabled=s;
  // }
}
