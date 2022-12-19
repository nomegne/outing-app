import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';
import { Out } from '../models/Out';

@Injectable({
  providedIn: 'root'
})
export class OutsService {


  constructor(private httpClient:HttpClient) {}
 

  getTable():Observable<Out[]>{
    const header=new HttpHeaders().set("apikey",environment.api.key);
    return this.httpClient.get<Out[]>
    (environment.api.url+'service',{'headers':header})
  }

  

    //recuperer un element id de la table 
    getTableID(id:number):Observable<Out[]>{
      const header=new HttpHeaders().set("apikey",environment.api.key);
      return this.httpClient.get<Out[]>
      (environment.api.url+'service?id=eq.'+id,{'headers':header})
  
    }

  getTableF():Observable<Out[]>{
    const header=new HttpHeaders().set("apikey",environment.api.key).set("Range","1-3");
    return this.httpClient.get<Out[]>
    (environment.api.url+'service ',{'headers':header})
  }

  getBar():Observable<Out[]>{
    const header=new HttpHeaders().set("apikey",environment.api.key);
    return this.httpClient.get<Out[]>
    (environment.api.url+'service?select=*&categorie=eq.Bar',{'headers':header})
  }


  //inserer les données 
ajout( donnees: {
  
}):Observable<any>{
  const header=new HttpHeaders().set("apikey",environment.api.key);
  return this.httpClient.post<Out[]>
 (environment.api.url+'service',donnees,{'headers':header});

}
  
  setTableOut(){}

  //modifier les données

}


