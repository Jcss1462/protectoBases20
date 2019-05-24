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

  filename: any = null;


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

  name(e) {

    this.filename = e.target.value;
    console.log(this.filename);

  }


  x(e) {
    this.xsize = e.target.value;
    console.log(this.xsize);
    this.Previsualizar();
  }

  y(e) {
    this.ysize = e.target.value;
    console.log(this.ysize);
    this.Previsualizar();
  }


  changeColor(event: any) {
    //update the ui
    this.colval = event.target.value;
    console.log(this.colval);
    this.Previsualizar();
  }
  changeCal(event: any) {
    //update the ui
    this.calidad = event.target.value;
    console.log(this.calidad);
    this.Previsualizar();
  }


  download() {

    //para cerrar la ventana despueds de descargada
    let ventanaCe = document.getElementById("filename");

    
    let verb: any = "";


    if (this.filename != null) {

      verb = verb + '&filename=' + this.filename + '.jpg';

      if (this.xsize != null && this.ysize != null) {

        verb = verb + '&sx=' + this.xsize + "&sy=" + this.ysize;
      }

      if (this.colval != "ninguno") {
        verb = verb + '&col=' + this.colval;
      }

      if (this.calidad != "ninguno") {
        verb = verb + '&cali=' + this.calidad;
      }

      console.log(verb);

      this._edi.getEditable(this.id, verb).subscribe((data) => {

        if (data) {
          alert("Descarga exitosa");
          ventanaCe.style.display = "none";
          verb = "";
          this.filename=null;
          

        }else{
          alert("Ha ocurrido un error");
        }
      });
    } else {
      alert("Error: nombre al archivo");
    }

  }



  Previsualizar() {
    let verb: any = "";

    if ((this.xsize != null && this.ysize != null) || this.colval != "ninguno" || this.calidad != "ninguno") {
      this.imsartis = [];
      if (this.xsize != null && this.ysize != null) {

        verb = verb + '&sx=' + this.xsize + "&sy=" + this.ysize;
      }

      if (this.colval != "ninguno") {
        verb = verb + '&col=' + this.colval;
      }

      if (this.calidad != "ninguno") {
        verb = verb + '&cali=' + this.calidad;
      }


      console.log(verb);
      this._edi.getEditable(this.id, verb)
        .subscribe((data) => {
          for (let idx = 0; idx < data.length; idx++) {

            data[idx].imagen = this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
          }
          this.imsartis = data;
        });
    } else {

      this._edi.getArtists(this.id)
        .subscribe((data) => {
          for (let idx = 0; idx < data.length; idx++) {

            data[idx].imagen = this.bufferToBase64(data[idx]["imagen_principal"]["imgBase64"]);
          }
          this.imsartis = data;
        });

    }

  }


  restablecer() {
    this.xsize = null;
    this.ysize = null;
    this.colval = "ninguno";
    this.calidad = "ninguno";
    this.Previsualizar();
  }


  //////////////////////////////////////////////////////////////////////
  bufferToBase64(b64encoded) {

    return 'data:image/jpeg;base64,' + b64encoded;
  }

  //ir a la pagina anterior
  goBack(): void {
    this.location.back();
  }

  opendescarga() {
    let ventanaCe = document.getElementById("filename");
    ventanaCe.style.display = "inline-block";
  }
  close() {
    let ventanaCe = document.getElementById("filename");
    ventanaCe.style.display = "none";
  }


}
