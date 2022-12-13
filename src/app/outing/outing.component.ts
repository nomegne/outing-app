import { Component } from '@angular/core';
import { Out } from '../models/out';
import { OutService } from '../services/out.service';

@Component({
  selector: 'app-outing',
  templateUrl: './outing.component.html',
  styleUrls: ['./outing.component.scss']
})

export class OutingComponent {

  outs:Out[]=[];
  constructor(private outservice:OutService){}
  ngOnInit():void{
   this.outs=this.outservice.getOutService();

  };
}
