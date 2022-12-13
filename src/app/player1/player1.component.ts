import { Component,EventEmitter,Output,Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component implements OnInit {
  // siteurl=window.location.href;
  constructor(private shareserv:SharedService,public _router: Router, public _location: Location){}
   pi : number = 9;
   pj : number = 0;
   row : number =1;
   points : number =1;
   value: number=0;
   winning : String='';
   value_message : string='';
   win:boolean=false;
   //randomnumber:number=0
   isshowing:boolean=false;
  //  @Input() disabled!:boolean;
  //  @Output() click=new EventEmitter();

   @Output() emitter1=new EventEmitter<any[]>();
  onclick(){
    //this.isshowing=!this.isshowing;
   var randomnumber=Math.floor(Math.random() * 6)+1;
  this.value=randomnumber;
  console.log("Random Number : "+randomnumber);
  this.shareserv.onfun(this.pi,this.pj,randomnumber,this.row,this.points)
       this.pi=this.shareserv.pi;
       this.pj=this.shareserv.pj;
       this.row=this.shareserv.r;
       this.points=this.shareserv.points;
    console.log("The changed values")
    console.log(this.pi)
    console.log(this.pj)
    this.emitter1.emit([this.pi,this.pj]);
    this.shareserv.bool(false);
    this.isshowing=true;
    if(this.points==100){
      this.win=true;
      this.pi=9;
      this.pj=0;
      this.row=1;
      this.points=1;
      this.value=0;
      setTimeout(() => this.refresh(), 4000);
    }
    //this.randomnumber=0;
    //this.click.emit();
  }
    handleclick(){
      return this.isshowing;
 }
 ngOnInit(){
  this.shareserv.message.subscribe((data)=>{
    this.isshowing=data;
  })
  this.emitter1.emit([this.pi,this.pj]);
}


  // refresh(): void {
  //   this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
  //     console.log(decodeURI(this._location.path()));
  //     this._router.navigate([decodeURI(this._location.path())]);
  //   });
  // }
  refresh(){
    alert("New Game Loading...");
    window.location.reload();
  }
}
