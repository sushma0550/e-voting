import { Component, OnInit } from '@angular/core';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {DataSource} from "../DataSource";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

 
  loginForm:FormGroup;
  submitted =false;
  constructor(private formBuilder:FormBuilder,private router:Router,private route:ActivatedRoute,private toaster:ToastrService) {


   }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:["",[Validators.required,Validators.email]],
      password:["",Validators.required]
    })
  }

  get helper()
  {
    return this.loginForm.controls;
  }

  OnSubmit()
  {
   
    this.submitted =true;
    if(this.loginForm.invalid)
    {
      this.toaster.error("Invalid Credentials","Login Failed !")
      return;
    }

    DataSource.userList.forEach(i=>{
      if(i.email == this.loginForm.value.userName && i.password == this.loginForm.value.password)
      {
        this.toaster.success("Welcome to E-Voting","Login Successful")
        this.router.navigate(['/','homePage']);
        

      }
      else
      {
        this.toaster.error("Invalid Credentials","Login Failed !")
      }
    }
    );
   
  }

  Register()
  {
    this.router.navigate(['/','registrationPage'])
  }
}
