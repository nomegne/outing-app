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
  id:number=0;
  

  modifForm =new FormGroup({
    id:new FormControl('',[Validators.required]),
    categorie:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    lieu:new FormControl('',[Validators.required]),
    contact:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    heure_ouverture:new FormControl('',[Validators.required]),
    heure_fermeture:new FormControl('',[Validators.required]),
    image:new FormControl('',[Validators.required])
  })

  constructor(private outservice:OutsService,private route:ActivatedRoute){}
  ngOnInit():void{
    
    this.route.params.subscribe(
      (params)=>{
       // this.id=params['id'];
        this.outservice.getTableID(params['id']).subscribe(
          (data)=>{
            if(data.length>0){
              this.outsI=data[0]
              this.id=data[0].id
              this.modifForm.controls.categorie.setValue(this.outsI.categorie)
              this.modifForm.controls.name.setValue(this.outsI.name)
              this.modifForm.controls.lieu.setValue(this.outsI.lieu)
              this.modifForm.controls.description.setValue(this.outsI.description)
              this.modifForm.controls.image.setValue(this.outsI.image)
              // this.modifForm.controls.contact.setValue(this.outsI.contact)
              // this.modifForm.controls.heure_fermeture.setValue(this.outsI.heure_fermeture)
              // this.modifForm.controls.heure_ouverture.setValue(this.outsI.heure_ouverture)
            } } )} )
    
  }

  

  onSubmit(){
    console.log(this.modifForm.value);
    
    let donneesM={

          categorie:(this.modifForm.value["categorie"]),
          name:(this.modifForm.value["name"]),
          contact:(this.modifForm.value["contact"]),
          heure_ouverture:(this.modifForm.value["heure_ouverture"]),
          heure_fermeture:(this.modifForm.value["heure_fermeture"])
         }
         console.log(donneesM);

         this.outservice.modif(this.id,donneesM).subscribe(
          {next:(data)=>{
            console.log(data);
            this.outservice.setTableOutM();
          }}
         )
  
}

}
