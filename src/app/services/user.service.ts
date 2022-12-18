import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private loggedIn: boolean=false;

  constructor(private httpClient:HttpClient ) { }
  login(credentials:{email?:string | null | undefined,password?:string | null | undefined}):Observable<any>{
    const headers = new HttpHeaders().set("apikey",environment.api.key)
    return this.httpClient.post(
      environment.api.urlHote+'token?grant_type=password',
    credentials,{"headers":headers}
    );
  }

  setLogin(){
    this.loggedIn=true;
  }
getLogin(){
  return this.loggedIn;
}


  signup(credentials:{email?:string ,password:string }):Observable<any>{
    return this.httpClient.post(
      environment.api.urlHote+'signup',
      credentials
    )
  }
  
}
