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
   points : number =1;
  value: number=0;
  isshowing:boolean=false;
  win:boolean=false;
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
    this.shareserv.bool(false);
    this.isshowing=true;
    if(this.points==100){
      this.win=true;
      setTimeout(() => this.refresh(), 1000);
      //this.refresh();
    }
    //this.click.emit();
  }
  handleclick(){
    return this.isshowing;
}
ngOnInit(){
this.shareserv.message.subscribe((data)=>{
  this.isshowing=data;
})
this.emitter2.emit([this.pi,this.pj]);
}
//   handleclick(){
//     this.isshowing=false;
//       //this.shareserv.p2play(false);
// }
refresh(){
  alert("Click Ok to Begin New Game");
  window.location.reload();
}
}
