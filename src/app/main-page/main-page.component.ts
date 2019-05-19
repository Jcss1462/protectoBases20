import { Component, OnInit } from '@angular/core';

//servicios
import { Artist } from '../services/api';
import{ArtistasService} from '../services/api';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  artists: Artist[];

  constructor(private _Artistas:ArtistasService) {}

  ngOnInit() {
    this._Artistas.getArtists(null)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada=this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
      }
      this.artists=data;
    });
  }

  

  //activar lista de genero
  activarGenero(): void {
    let activador= document.getElementById("listagenero");
    activador.classList.toggle('active');
  }

  //activar lista de artista
  activarArtista(): void {
    let activador= document.getElementById("listaArista");
    activador.classList.toggle('active');
  }

  bufferToBase64(b64encoded){

    return 'data:image/jpeg;base64,'+b64encoded;
  }




}
