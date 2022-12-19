import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Out } from '../models/Out';
import { OutsService } from '../services/outs.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent {


//le formulaire à modifier


 
  outsI:Out |undefined;

  constructor(private outservice:OutsService,private route:ActivatedRoute){}
 


  ngOnInit():void{
    
    this.route.params.subscribe(
      (params)=>{
        this.outservice.getTableID(params['id']).subscribe(
          (data)=>{
            if(data.length>0){
              this.outsI=data[0]} } )} )
    
  }


  
}
