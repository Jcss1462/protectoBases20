import { Component, OnInit } from '@angular/core';

//importo para obtener el parametro en la url
import { Router } from '@angular/router';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';

//importo servicios
import { Busart } from '../services/api';
import{BusquedaartistaService} from '../services/api';

import { Buscan } from '../services/api';
import{BusquedacancionService} from '../services/api';

import { Buslet } from '../services/api';
import{BusquedaletraService} from '../services/api';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  buscaArt: Busart[];
  buscaCan: Buscan[];
  buscaLet: Buslet[];

  private query: string;

  constructor(private location: Location,private router: Router,private _busart:BusquedaartistaService,private _buscan:BusquedacancionService,private _buslet:BusquedaletraService) {
    //sacar el parametro id y meterlo en un variable
    this.query=this.router.parseUrl(this.router.url).queryParams.query;
    console.log(this.query);
   }

  ngOnInit() {

    this._busart.getArtists(this.query)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada=this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
      }
      this.buscaArt=data;
    });


    this._buscan.getCancion(this.query)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada=this.bufferToBase64(data[idx]["imagen_cancion"]["imgBase64"]);
      }
      this.buscaCan=data;
    });

    this._buslet.getCancion(this.query)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada=this.bufferToBase64(data[idx]["imagen_cancion"]["imgBase64"]);
      }
      this.buscaLet=data;
    });

    
  }

  bufferToBase64(b64encoded){

    return 'data:image/jpeg;base64,'+b64encoded;
  }


}
