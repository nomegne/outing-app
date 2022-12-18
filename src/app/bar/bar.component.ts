import { Component } from '@angular/core';
import { Out } from '../models/Out';
import { OutsService } from '../services/outs.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
outs:Out[]=[];

constructor(private outservice:OutsService){}
ngOnInit():void{
  this.outservice.getTable().subscribe(
    (data)=>this.outs=data
  );
}
}
