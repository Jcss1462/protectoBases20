import { Component, OnInit } from '@angular/core';

//importo para obtener el parametro en la url
import { Router } from '@angular/router';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';

//importo servicios
import { Busimg } from '../services/api';
import{BusquedaimagenService} from '../services/api';

@Component({
  selector: 'app-busqueda-imagen',
  templateUrl: './busqueda-imagen.component.html',
  styleUrls: ['./busqueda-imagen.component.scss']
})
export class BusquedaImagenComponent implements OnInit {

  buscaimagen: Busimg[];
  private query: string;

  constructor(private location: Location,private router: Router,private _busimg:BusquedaimagenService) { 
    this.query=this.router.parseUrl(this.router.url).queryParams.filename;
    console.log(this.query);
  }

  ngOnInit() {

    this._busimg.getArtists(this.query)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){
        
        data[idx].id_artista=data[idx]["id_artista"];
        data[idx].nombre=data[idx]["nombre"];
        data[idx].portada=this.bufferToBase64(data[idx]["imagen"]["imgBase64"]);
      }
      this.buscaimagen=data;
    });

  }

  bufferToBase64(b64encoded){

    return 'data:image/jpeg;base64,'+b64encoded;
  }

  //ir a la pagina anterior
  goBack(): void {
    this.location.back();
  }


}
