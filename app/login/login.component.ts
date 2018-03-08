import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../registration/user.model';
import { NgForm } from '@angular/forms';
import { AuthServiceImp } from '../registration/auth.service';
import { Observable, Observer } from 'rxjs/Rx';
import * as Firebase from 'firebase';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user1: UserModel = new UserModel();

  constructor(private authService: AuthServiceImp,private router:Router) { }
  SigninWith(email, password) {
    this.authService.userSignin(email, password).subscribe(
      data => {
        alert("Welcome")
      },
      error => { console.log(error) }

    )
    this.router.navigate(['home'])
  }
      



  ngOnInit() {
  }

}
