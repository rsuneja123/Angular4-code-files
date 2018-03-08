import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService, AuthServiceImp } from '../registration/auth.service';
import * as Firebase from 'firebase';
@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  myForm: FormGroup;
  myForm1: FormGroup;
  
  constructor(private fb: FormBuilder,private as:AuthServiceImp) { }

  ngOnInit() {
    this.as.getToken()
    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      emailId: ['', Validators.email],
      password: ['', [Validators.required, hasExclamationMark]]
    })
    this.myForm1 = this.fb.group({
      emailId1: ['', Validators.email],
      password1: ['', Validators.required]
    })
    function hasExclamationMark(input) {
      const hasExclamation = input.value.indexOf('!') >= 0;
      return hasExclamation ? null : { needsExclamation: true };
    }

  }
  signUp(email, password) {
    console.log("email is", email)
    console.log("password is", password)
    this.as.userSignup(email, password).subscribe((response: Firebase.User) => { alert("success")})

  }


}
