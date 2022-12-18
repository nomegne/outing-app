import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Out } from '../models/Out';
import { OutsService } from '../services/outs.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  outs:Out[]=[];

  constructor(private outservice:OutsService){}
  ngOnInit():void{
    this.outservice.getTable().subscribe(
      (data)=>this.outs=data
    );
  }


}
