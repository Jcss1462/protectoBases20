import { Component, OnInit } from '@angular/core';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  //activar biografia
  activarBiografia(): void {
    let activador= document.getElementById("listabiografia");
    activador.classList.toggle('active');
  }

  
  //activar lista de artista
  activarArtista(): void {
    let activador= document.getElementById("listaArista");
    activador.classList.toggle('active');
  }

  
  //activar lista de canciones
  activarCancion(): void {
    let activador= document.getElementById("listaCanciones");
    activador.classList.toggle('active');
  }

  //ir a la pagina anterior
  goBack(): void {
    this.location.back();
  }

}
