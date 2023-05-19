import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.scss']
})
export class RegistrerComponent implements OnInit {

  constructor() { }
  email: any;
  password: any;
  error:string = "ERROR - DATOS INCORRECTOS"
  errorMessage:boolean = false;
  name: any;
  userName: any;
  lastName: any;
  telefono: any;
  ngOnInit(): void {
  }

  RegisterButton() {
    
  }

  AceptRegisterbutton(){
    
  }


}
