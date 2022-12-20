import { Component } from '@angular/core';
import { Out } from '../models/Out';
import { OutsService } from '../services/outs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  outs:Out[]=[];
  constructor(private outservice:OutsService){}
  ngOnInit():void{
   // this.outs=this.outservice.getouting();
    this.outservice.getTable().subscribe(
      (data) =>this.outs=data);
  }

  
  onDelete(id:number){
    this.outservice.delete(id).subscribe();
    window.location.reload
  }
}
