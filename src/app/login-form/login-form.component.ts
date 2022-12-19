import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() credentials=new EventEmitter<{email?: string | null| undefined,password?:string | null|undefined}>();

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.required])
  })
 
  
constructor(private userService: UserService, private router:Router){}

  onSubmit(){
    console.log(this.loginForm.value);
    let credentials ={...this.loginForm.value}
    this.credentials.emit(credentials);
    this.userService.login(credentials).subscribe(
      {
        next:(data) =>{
      console.log(data);
      localStorage.setItem('token',data['access_token'])
      this.userService.setLogin();
      this.router.navigateByUrl('/admin')
        },
        error:(error) =>{
       console.log(error)
        }
      }
    )

  }

}
