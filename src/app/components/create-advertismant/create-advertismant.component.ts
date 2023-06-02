import { Component, OnInit } from '@angular/core';
import { AdvertismentsService } from 'src/app/services/advertisments.service';
import { Advertisments } from 'src/app/interfaces/advertisments';

@Component({
  selector: 'app-create-advertismant',
  templateUrl: './create-advertismant.component.html',
  styleUrls: ['./create-advertismant.component.scss']
})
export class CreateAdvertismantComponent implements OnInit {

  constructor(private advertismentService: AdvertismentsService) { }
  origen: any;
  error:string = "ERROR - DATOS INCORRECTOS"
  errorMessage:boolean = false;
  destino: any;
  horario: any;
  fecha: any;
  nombre:any;
  asientosLibres:any;
  telefono:any;
  precio:any;
  ngOnInit(): void {
  }

  PublicarAnuncio(){
    const newAd: Advertisments = {
      name: this.nombre, 
      freeSeat: this.asientosLibres,
      phone: this.telefono, // Aquí debes poner el número de teléfono de quien publica el anuncio
      schedule: this.horario,
      price: this.precio, 
      pickupAddress: this.origen,
      dropAddress: this.destino,
      role: 'driver' // Aquí debes poner el rol de quien publica el anuncio
    };
    this.advertismentService.publicAd(newAd);
  }

}
