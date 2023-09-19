import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService){}
  loginForm:FormGroup = new FormGroup({
    username:new FormControl(null , [Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Za-z]\\w{7,15}$`)])
  })
  submitLoginForm(loginForm:FormGroup){
    this._AuthService.loginUser(loginForm.value).subscribe({
      next:(res)=>{
        console.log('login successful',res);
      },
      error:(err)=>{
        console.log('login faild',err);
      },
      complete:()=>{

      }
    })
  }
}
