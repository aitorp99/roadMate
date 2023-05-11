import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email: any;
  password: any;
  error:string = "ERROR - DATOS INCORRECTOS"
  errorMessage:boolean = false;
  ngOnInit(): void {
  }

  LoginButton() {
    
  }
}
