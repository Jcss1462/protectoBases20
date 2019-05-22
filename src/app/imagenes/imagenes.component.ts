import { Component, OnInit } from '@angular/core';

//importo para obtener el parametro en la url
import { Router } from '@angular/router';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';


//importo servicios
import { Imartist } from '../services/api';
import{ImagenesartistasService} from '../services/api';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {

  imsartis: Imartist[];

  private id: string;
  constructor(private location: Location,private router: Router,private _imagenartis:ImagenesartistasService) { 
    this.id=this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);
  }

  ngOnInit() {

    this._imagenartis.getArtists(this.id)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].imagen=this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
      }
      this.imsartis=data;
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
