import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService,AuthServiceImp } from './auth.service';
import { UserModel } from './user.model';
import { Router } from '@angular/router';
import * as Firebase from 'firebase';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild("myForm") myForm: NgForm;

  cityName: string = 'Delhi';
  user: UserModel = new UserModel();
  constructor(private authService: AuthServiceImp, private router: Router) { } 
  signUpWith(email, password) {
    console.log("email is", email)
    console.log("password", password)
    this.authService.userSignup(email, password).subscribe(
      (response: Firebase.User) => { alert("successfully") })
    this.router.navigate(['login'])
  }
  
  signInWithGoogle() {
  }
  ngOnInit() {
  }
  

}
