import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view"; 

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService], 
  moduleId: module.id,
  templateUrl: "login.html",
  styleUrls: ["login-common.css", "login.css"]
})

export class LoginComponent implements OnInit{
  user: User;
  isLoggedIn = true;
  @ViewChild('container') container: ElementRef;
 
  constructor(
    private router: Router,
    private userService: UserService,
    private page: Page
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  submit() {
    if(!this.user.isValidEmail()) {
      alert("Enter a valid email address");
      return;
    }
    
    if(this.isLoggedIn) {
      this.login();
    }
    else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
    .subscribe(
      () => this.router.navigate(['/list']),
      (error) => alert('Unfortunately we could not find your account')
    );
  }

  signUp() {
    this.userService.register(this.user)
    .subscribe(
      () => {
        alert('Your account was successfully created');
        this.toggleDisplay() ;
      },
      () => alert('Unfortunately we are unable to create your account')
    );
  }

  toggleDisplay() {
    this.isLoggedIn = !this.isLoggedIn;

    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggedIn ? new Color('#fff') : new Color('#e67e22'),
      duration: 200
    });
  }
}