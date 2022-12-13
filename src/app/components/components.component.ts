import { Component, OnInit } from '@angular/core';
import { Out } from '../models/out';
import { OutService } from '../services/out.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit{

  outs:Out[]=[];
  constructor(private outservice:OutService){}
  ngOnInit():void{
   this.outs=this.outservice.getOutService();

  };

}


  