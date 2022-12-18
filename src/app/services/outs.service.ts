import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment';
import { Out } from '../models/Out';

@Injectable({
  providedIn: 'root'
})
export class OutsService {
  // outs:Out[]=[
  //  {id:0,categories:"restaurant"},
  //  {id:0,categories:"restaurant"},
  //  {id:0,categories:"restaurant"}
  // ];

  constructor(private httpClient:HttpClient) {}
  // getouting():Out[]{
  //   return this.outs;
  // }

  getTable():Observable<Out[]>{
    const header=new HttpHeaders().set("apikey",environment.api.key);
    return this.httpClient.get<Out[]>
    (environment.api.url+'service',{'headers':header})
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

}
