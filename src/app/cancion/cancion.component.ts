import { Component, OnInit } from '@angular/core';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';


//importo para obtener el parametro en la url
import { Router } from '@angular/router';

//importo canciones
import { Cancion } from '../services/api';
import{CancionesService} from '../services/api';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.scss']
})
export class CancionComponent implements OnInit {

  canci: Cancion[];
  private id: string;

  constructor(private location: Location,private router: Router, private _cancion:CancionesService) { 
    //sacar el parametro id y meterlo en un variable
    this.id=this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);
  }

  ngOnInit() {
    this._cancion.getCancion(this.id)
    .subscribe(artists => this.canci = artists);
  }

  
  //activar letra
  activarLetra(): void {
    let activador = document.getElementById("listaletra");
    activador.classList.toggle('active');
  }


  goBack(): void {
    this.location.back();
  }

}
