import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-advertismant',
  templateUrl: './create-advertismant.component.html',
  styleUrls: ['./create-advertismant.component.scss']
})
export class CreateAdvertismantComponent implements OnInit {

  constructor() { }
  origen: any;
  error:string = "ERROR - DATOS INCORRECTOS"
  errorMessage:boolean = false;
  destino: any;
  horario: any;
  fecha: any;
  ngOnInit(): void {
  }

  PublicarAnuncio(){
    
  }

}
