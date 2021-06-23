import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import {PasswordChecker} from "../custom-validators/password-checker";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm :FormGroup;
  submitted =false;
  
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName:["",Validators.required,Validators.minLength(2)],
      lastName:["",Validators.required,Validators.minLength(2)],
      userName:["",Validators.required,Validators.email],
      passWord:["",Validators.required],
      confirmPassword:["",Validators.required],  
      // nINumber:['',Validators.required],
      // phoneNumber : ['',Validators.required],
      acceptTandC:[false,Validators.requiredTrue]
    },{
      validators:PasswordChecker('passWord','confirmPassword')
    });
  }

  get helper()
  {
    return this.registerForm.controls;

  }

  OnSubmit(){
    this.submitted =true;
    if(this.registerForm.invalid)
    {
      return ;
    }
    
    console.table(this.registerForm.value);

    alert("success Signup\n"+ JSON.stringify( this.registerForm.value));
  }

  OnReset(){
    this.submitted=false;
    this.registerForm.reset;
  }


}
