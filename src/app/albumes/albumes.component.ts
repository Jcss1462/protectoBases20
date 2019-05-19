import { Component, OnInit } from '@angular/core';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';


//importo para obtener el parametro en la url
import { Router } from '@angular/router';

//importo canciones
import { Album } from '../services/api';
import{AlbumesService} from '../services/api';

import { Canalb } from '../services/api';
import{CancionesalbumService} from '../services/api';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {

  albi: Album[];
  canalbi: Canalb[]
  private id: string;

  constructor(private location: Location,private router: Router, private _album:AlbumesService,private _canalb:CancionesalbumService) { 
    //sacar el parametro id y meterlo en un variable
    this.id=this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);
  }

  ngOnInit() {
    this._album.getAlbum(this.id)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada_album=this.bufferToBase64(data[idx]["imagen_album"]["imgBase64"]);
      }
      this.albi=data;
    });

    this._canalb.getCanciones(this.id)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada_cancion=this.bufferToBase64(data[idx]["imagen_cancion"]["imgBase64"]);
      }
      this.canalbi=data;
    });


  }

  
  goBack(): void {
    this.location.back();
  }

  bufferToBase64(b64encoded){

    return 'data:image/jpeg;base64,'+b64encoded;
  }
}
