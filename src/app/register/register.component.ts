import { Component } from '@angular/core';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService ){}

  registerForm:FormGroup = new FormGroup({
    user_name:new FormControl(null, [Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
    age:new FormControl(null, [Validators.required,Validators.min(16), Validators.max(30),Validators.pattern('^[0-9]*$')]),
    email:new FormControl(null , [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(`^[A-Za-z]\\w{7,15}$`)])
  })
  submitRegsiterForm(registerForm:FormGroup){
    // console.log(registerForm);
    this._AuthService.registerUser(registerForm.value).subscribe(
      {
        next:(res:any)=>{
          console.log('registration successful:',res)
          console.log(`resid is : ${res.id}`);
          this._AuthService.userData(res.id).subscribe((data)=>{
            console.log("user data",data)
          })
        },
        error:(e)=>{
          console.log('registeration faild',e)
        },
        complete:()=>{

        }
      }
    )
  }

}
