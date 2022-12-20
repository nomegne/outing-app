import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Out } from '../models/Out';
import { OutsService } from '../services/outs.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent {
  outA:Out[]=[];

  AjoutForm=new FormGroup({
    
    categorie:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    lieu:new FormControl('',[Validators.required]),
    contact:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    heure_ouverture:new FormControl('',[Validators.required]),
    heure_fermeture:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required])
 })

 constructor(private outService:OutsService, private router: Router){}


 onSubmit(){
  console.log(this.AjoutForm.value);
  let donnees={
              categorie:this.AjoutForm.value["categorie"],
              name:this.AjoutForm.value["name"],
              lieu:this.AjoutForm.value["lieu"],
              description:this.AjoutForm.value["description"],
              heure_ouverture:this.AjoutForm.value["heure_ouverture"],
              heure_fermeture:this.AjoutForm.value["heure_fermeture"],
              image:this.AjoutForm.value["image"]
            }
  console.log(donnees);
  this.outService.ajout(donnees).subscribe(
    {
      next:(data)=>{
        console.log(data);
        this.outService.setTableOut();
      }
    }
    
  )
 this.AjoutForm.reset();
  
 }

}
