import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Out } from '../models/Out';
import { OutsService } from '../services/outs.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  outs:Out[]=[];
  
  outsI:Out |undefined;

  constructor(private outservice:OutsService,private route:ActivatedRoute){}
  ngOnInit():void{
    this.outservice.getTable().subscribe(
      (data)=>this.outs=data
    );

  
    this.route.params.subscribe(
      (params)=>{
        this.outservice.getTableID(params['id']).subscribe(
          (data)=>{
            if(data.length>0){
              this.outsI=data[0]
            }
          }
        )
      }
    )
    
  }


}
