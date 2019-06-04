import { Component, OnInit } from '@angular/core';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';


//importo para obtener el parametro en la url
import { Router } from '@angular/router';




//servicios
import { Artist } from '../services/api';
import { ArtistasService } from '../services/api';

import { Canart } from '../services/api';
import { CancionesartistaService } from '../services/api';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  //private genero: string;

  canart: Canart[];
  artists: Artist[];

  req: any = {
    genero: null,
    id: null
  };

  //condicionales
  pop: boolean = false;
  rock: boolean = false;
  jazz: boolean = false;
  swing: boolean = false;

  constructor(private location: Location, private router: Router, private _Artistas: ArtistasService, private _Canartist: CancionesartistaService) {

    //sacar el parametro id y meterlo en un variable
    this.req.genero = this.router.parseUrl(this.router.url).queryParams.genero;

    if (this.req.genero == "pop") {
      this.pop = true;
    } else if (this.req.genero == "rock") {
      this.rock = true;
    } else if (this.req.genero == "jazz") {
      this.jazz = true;
    } else if (this.req.genero == "swing") {
      this.swing = true;
    }

  }


  ngOnInit() {
    this._Artistas.getArtistsBygenero(this.req)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada=this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
      }
      this.artists=data;


      console.log("extraxion de datos de artista por genero exitosa");
      localStorage.setItem("artistgenere",JSON.stringify(data));
    },(error) =>{ 
      console.log(error.message);
      console.log("error de conexion a artista por genero \nintento de usar el local storage");

      if(localStorage.getItem('artistgenere')==null){
        console.log('Local storage vacio')
      }else{
        this.artists=JSON.parse(localStorage.getItem('artistgenere'));
        console.log('Local storage usado')
      }

    }
    );

    this._Canartist.getCanArtistsBygenero(this.req)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada_cancion=this.bufferToBase64(data[idx]["imagen_cancion"]["imgBase64"]);
      }
      this.canart=data;


      console.log("extraxion de datos de canciones por genero exitosa");
      localStorage.setItem("songgenere",JSON.stringify(data));
    },(error) =>{ 
      console.log(error.message);
      console.log("error de conexion a canciones por genero \nintento de usar el local storage");

      if(localStorage.getItem('songgenere')==null){
        console.log('Local storage vacio')
      }else{
        this.canart=JSON.parse(localStorage.getItem('songgenere'));
        console.log('Local storage usado')
      }

    }
    );
  }



  //activar lista de artista
  activarArtista(): void {
    let activador = document.getElementById("listaArista");
    activador.classList.toggle('active');
  }


  //activar lista de canciones
  activarCancion(): void {
    let activador = document.getElementById("listaCanciones");
    activador.classList.toggle('active');
  }

  //ir a la pagina anterior
  goBack(): void {
    this.location.back();
  }

  bufferToBase64(b64encoded){

    return 'data:image/jpeg;base64,'+b64encoded;
  }

}
