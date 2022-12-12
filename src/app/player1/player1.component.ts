import { Component,EventEmitter,Output,Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.css']
})
export class Player1Component {
  constructor(private shareserv:SharedService){}
   pi : number = 9;
   pj : number = 0;
   row : number =1;
   points : number =0;
   value: number=0;
   randomnumber:number=0
   //isshowing:boolean=false;
  //  @Input() disabled!:boolean;
  //  @Output() click=new EventEmitter();
   @Output() emitter1=new EventEmitter<any[]>();
  onclick(){
    //this.isshowing=!this.isshowing;
    while(this.randomnumber == 0){
      this.randomnumber=Math.floor(Math.random() * 6);
    }
  this.value=this.randomnumber;
  console.log("Random Number : "+this.randomnumber);
  this.shareserv.onfun(this.pi,this.pj,this.randomnumber,this.row,this.points)
       this.pi=this.shareserv.pi;
       this.pj=this.shareserv.pj;
       this.row=this.shareserv.r;
       this.points=this.shareserv.points;
    console.log("The changed values")
    console.log(this.pi)
    console.log(this.pj)
    this.emitter1.emit([this.pi,this.pj]);
    this.randomnumber=0;
    //this.click.emit();
  }
//   handleclick(){
//     this.isshowing=true;
//       //this.shareserv.p2play(false);
// }
}
