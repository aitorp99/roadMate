import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }
  email: any;
  password: any;
  error:string = "ERROR - DATOS INCORRECTOS"
  errorMessage:boolean = false;
  ngOnInit(): void {
  }

  LoginButton() {
    if (!this.usersService.checkCredentials(this.email, this.password)) {
      this.errorMessage = true;
    } else {
      this.router.navigate(['/home']);
      this.errorMessage = false;
    }
  }
  
}
