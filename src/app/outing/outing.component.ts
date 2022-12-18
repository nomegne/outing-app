import { Component, Input } from '@angular/core';
import { Out } from '../models/Out';
import { OutsService } from '../services/outs.service';


@Component({
  selector: 'app-outing',
  templateUrl: './outing.component.html',
  styleUrls: ['./outing.component.scss']
})
export class OutingComponent {
  outs:Out[]=[];
  outsF:Out[]=[];
  outsBar:Out[]=[];

 
 

  constructor(private outservice:OutsService){}
  ngOnInit():void{
   // this.outs=this.outservice.getouting();
    this.outservice.getTable().subscribe(
      (data) =>this.outs=data);

    this.outservice.getTableF().subscribe(
      (dataf) =>this.outsF=dataf);

    this.outservice.getBar().subscribe(
      (dataB)=>this.outsBar=dataB);
   
  }



}
