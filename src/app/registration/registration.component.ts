import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {PasswordChecker} from "../custom-validators/password-checker";
import { User } from '../DataModels/UserData';

import {DataSource} from "../DataSource";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm :FormGroup;
  submitted =false;
  public user:User;
  constructor(private formBuilder:FormBuilder,private router:Router,private toaster:ToastrService) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      passWord:["",[Validators.required,Validators.minLength(6)]],
      confirmPassword:["",Validators.required],  
      nINumber:['',[Validators.required]],
      phoneNumber : ['',[Validators.required]],
      acceptTandC:[false,Validators.requiredTrue],
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
      this.toaster.error("Enter valid data","Registration Failed")
      return ;
    }
    
    let user =  new User();

    user.firstName = this.registerForm.value.firstName;
    user.lastName = this.registerForm.value.lastName;
    user.email = this.registerForm.value.email;
    user.password = this.registerForm.value.passWord;
    user.nINumber = this.registerForm.value.nINumber;
    user.phoneNumber = this.registerForm.value.phoneNumber;

    
    DataSource.setUser(user);

    this.router.navigate(['/','loginPage']);
    this.toaster.success("Please Login with the credentials","Registration Successful");
    
    
  }

  OnReset(){
    this.submitted=false;
    this.registerForm.reset;
  }


}
