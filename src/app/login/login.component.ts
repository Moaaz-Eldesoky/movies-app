import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null , [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Za-z]\\w{7,15}$`)])
  })
  submitLoginForm(loginForm:FormGroup){
    console.log("hello");
  }
}
