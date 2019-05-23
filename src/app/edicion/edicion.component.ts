import { Component, OnInit } from '@angular/core';

//importo para obtener el parametro en la url
import { Router } from '@angular/router';

//importacion par obtener la ultima pagina visitada
import { Location } from '@angular/common';


//importo servicios
import { EdicionService } from '../services/api';
import { Edi } from '../services/api';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {

  imsartis: Edi[];
  private id: string;


  xsize: any;
  ysize: any;

  colval: any = "ninguno";


  calidad: any = "ninguno";


  

  constructor(private location: Location, private router: Router, private _edi: EdicionService) {
    this.id = this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);

  }

  ngOnInit() {

    this._edi.getArtists(this.id)
      .subscribe((data) => {
        for (let idx = 0; idx < data.length; idx++) {

          data[idx].imagen = this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
        }
        this.imsartis = data;
      });

  }
  ///////////////////////////////////////////////////////////////////////////////////


  x(e) {
    this.xsize = e.target.value;
    console.log(this.xsize);
  }

  y(e) {
    this.ysize = e.target.value;
    console.log(this.ysize);
  }


  changeColor(event: any) {
    //update the ui
    this.colval = event.target.value;
    console.log(this.colval);
  }
  changeCal(event: any) {
    //update the ui
    this.calidad = event.target.value;
    console.log(this.calidad);
  }

  Previsualizar() {
    let verb: any="";

    if ((this.xsize != null && this.ysize != null) || this.colval != "ninguno"||this.calidad!="ninguno") {
      this.imsartis = [];
      if (this.xsize != null && this.ysize != null) {

        verb=verb+ '&sx=' + this.xsize + "&sy=" + this.ysize;
      }
      
      if (this.colval!= "ninguno") {
        verb =verb+  '&col=' + this.colval;
      }

      if (this.calidad!="ninguno") {
        verb =verb+  '&cali=' + this.calidad;
      }


      console.log(verb);
      this._edi.getEditable(this.id, verb)
        .subscribe((data) => {
          for (let idx = 0; idx < data.length; idx++) {

            data[idx].imagen = this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
          }
          this.imsartis = data;
        });
    }else{

      this._edi.getArtists(this.id)
        .subscribe((data) => {
          for (let idx = 0; idx < data.length; idx++) {

            data[idx].imagen = this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
          }
          this.imsartis = data;
        });

    }

  }




  //////////////////////////////////////////////////////////////////////
  bufferToBase64(b64encoded) {

    return 'data:image/jpeg;base64,' + b64encoded;
  }

  //ir a la pagina anterior
  goBack(): void {
    this.location.back();
  }

}
