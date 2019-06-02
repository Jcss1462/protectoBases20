import { Component, OnInit } from '@angular/core';

//importo para obtener el parametro en la url
import { Router } from '@angular/router';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';

//importo servicios
import { Canart } from '../services/api';
import{CancionesartistaService} from '../services/api';


import { Artist } from '../services/api';
import{ArtistasService} from '../services/api';

import { Albart } from '../services/api';
import{AlbumesartistaService} from '../services/api';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  canart: Canart[];
  artists: Artist[];
  albart: Albart[];

  private id: string;

  constructor(private location: Location,private router: Router,private _Albart:AlbumesartistaService,private _Canartist:CancionesartistaService,private _Artistas:ArtistasService) {
    //sacar el parametro id y meterlo en un variable
    this.id=this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);
  }

  ngOnInit() {

    this._Canartist.getArtists(this.id)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada_cancion=this.bufferToBase64(data[idx]["imagen_cancion"]["imgBase64"]);
      }
      this.canart=data;


      console.log("extraxion de datos de canciones de artistas exitosa");
      localStorage.setItem("canart",JSON.stringify(data));
    },(error) =>{ 
      console.log(error.message);
      console.log("error de conexion a canciones artistas\nintento de usar el local storage");

      if(localStorage.getItem('canart')==null){
        console.log('Local storage vacio')
      }else{
        this.canart=JSON.parse(localStorage.getItem('canart'));
        console.log('Local storage usado')
      }

    }
    );

    

    this._Artistas.getArtists(this.id)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada=this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
      }
      this.artists=data;


      console.log("extraxion de datos de nombre de artistas exitoso");
      localStorage.setItem("especificartist",JSON.stringify(data));
    },(error) =>{ 
      console.log(error.message);
      console.log("error de conexion a nombre artista especifico\nintento de usar el local storage");

      if(localStorage.getItem('especificartist')==null){
        console.log('Local storage vacio')
      }else{
        this.artists=JSON.parse(localStorage.getItem('especificartist'));
        console.log('Local storage usado')
      }

    }
    );



    this._Albart.getArtists(this.id)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada_album=this.bufferToBase64(data[idx]["imagen_album"]["imgBase64"]);
      }
      this.albart=data;


      
      console.log("extraxion de datos de albumes de artista");
      localStorage.setItem("albart",JSON.stringify(data));
    },(error) =>{ 
      console.log(error.message);
      console.log("error de conexion a albumes de artista\nintento de usar el local storage");

      if(localStorage.getItem('albart')==null){
        console.log('Local storage vacio')
      }else{
        this.albart=JSON.parse(localStorage.getItem('albart'));
        console.log('Local storage usado')
      }

    }
    );

  }

  //activar biografia
  activarBiografia(): void {
    let activador = document.getElementById("listabiografia");
    activador.classList.toggle('active');
    console.log(this.albart);
  }


  //activar lista de genero
  activarGenero(): void {
    let activador= document.getElementById("listagenero");
    activador.classList.toggle('active');
    
  }


  //activar lista de canciones
  activarCancion(): void {
    let activador = document.getElementById("listaCanciones");
    activador.classList.toggle('active');
  }

  //activar lista de Albums
  activarAlbum(): void {
    let activador= document.getElementById("listaAlbums");
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
