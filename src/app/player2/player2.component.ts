import { Component,EventEmitter,Output,Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.css']
})
export class Player2Component {

  constructor(private shareserv:SharedService){}
   pi : number = 9;
   pj : number = 0;
   row : number =1;
   points : number =0;
  value: number=0;
  //isshowing=true;
  // @Input() disabled!:boolean;
  //@Output() click=new EventEmitter();
  @Output() emitter2=new EventEmitter<any[]>();
  onclick(){
    //this.isshowing=!this.isshowing;
  var randomnumber = Math.floor(Math.random() * 6)+1;
  console.log("Random Number : "+randomnumber);
  this.value=randomnumber;
  this.shareserv.onfun(this.pi,this.pj,randomnumber,this.row,this.points)
       this.pi=this.shareserv.pi;
       this.pj=this.shareserv.pj;
       this.row=this.shareserv.r;
       this.points=this.shareserv.points;
    console.log("The changed values")
    console.log(this.pi)
    console.log(this.pj)
    this.emitter2.emit([this.pi,this.pj]);
    //this.click.emit();
  }
//   handleclick(){
//     this.isshowing=false;
//       //this.shareserv.p2play(false);
// }
}
