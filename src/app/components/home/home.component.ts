import { Component, OnInit } from '@angular/core';

type Anuncio = {
  titulo: string;
  descripcion: string;
  precio: number;
  ubicacion: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  adds: Anuncio[] = [
    {
      titulo: "Anuncio 1",
      descripcion: "Descripción del anuncio 1",
      precio: 100,
      ubicacion: "Ciudad 1",
    },
    {
      titulo: "Anuncio 2",
      descripcion: "Descripción del anuncio 2",
      precio: 200,
      ubicacion: "Ciudad 2",
    },
    {
      titulo: "Anuncio 3",
      descripcion: "Descripción del anuncio 3",
      precio: 300,
      ubicacion: "Ciudad 3",
    },
  ];
  ngOnInit(): void {
  }

}
