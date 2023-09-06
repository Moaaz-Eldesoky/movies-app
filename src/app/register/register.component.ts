import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null),
    last_name:new FormControl(null),
    age:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null)
  })
}
