import { Component } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
    last_name:new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
    age:new FormControl(null, [Validators.required,Validators.min(16), Validators.max(30),Validators.pattern('^[0-9]*$')]),
    email:new FormControl(null , [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Za-z]\\w{7,15}$`)])
  })
  submitRegsiterForm(registerForm:FormGroup){
    console.log(registerForm);
  }
}
