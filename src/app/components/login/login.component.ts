import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm")
  loginForm!: NgForm;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if(!this.loginForm.valid) {
      console.log("invalid data");
      return;
    }
    console.log(this.loginForm.value);
  }
}
