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
  filename: any = null;

  constructor(private location: Location,private router: Router, private _cancion:CancionesService) { 
    //sacar el parametro id y meterlo en un variable
    this.id=this.router.parseUrl(this.router.url).queryParams.id;
    console.log(this.id);
  }

  ngOnInit() {
    this._cancion.getCancion(this.id)
    .subscribe((data)=>{
      for(let idx=0;idx<data.length;idx++){

        data[idx].portada_cancion=this.bufferToBase64(data[idx]["imagen_cancion"]["imgBase64"]);
        data[idx].info=data[idx]["info"]["info"];
      }
      this.canci=data;


      console.log("extraxion de datos de cancion exitosa");
      localStorage.setItem("canci",JSON.stringify(data));
    },(error) =>{ 
      console.log(error.message);
      console.log("error de conexion a cancion especifica\nintento de usar el local storage");

      if(localStorage.getItem('canci')==null){
        console.log('Local storage vacio')
      }else{
        this.canci=JSON.parse(localStorage.getItem('canci'));
        console.log('Local storage usado')
      }

    }
    );

  }

  
  //activar letra
  activarLetra(): void {
    let activador = document.getElementById("listaletra");
    activador.classList.toggle('active');
  }


  goBack(): void {
    this.location.back();
  }

  bufferToBase64(b64encoded){

    return 'data:image/jpeg;base64,'+b64encoded;
  }

  opendescarga() {
    let ventanaCe = document.getElementById("filename");
    ventanaCe.style.display = "inline-block";
  }
  close() {
    let ventanaCe = document.getElementById("filename");
    ventanaCe.style.display = "none";
  }

  name(e) {

    this.filename = e.target.value;
    console.log(this.filename);

  }

  download() {
    //para cerrar la ventana despueds de descargada
    let ventanaCe = document.getElementById("filename");
    let verb: any = "";

    if (this.filename != null) {
      verb = verb + '&filename=' + this.filename + '.mp3';
      console.log(verb);
      
      this._cancion.downloadsSong(this.id, verb).subscribe((data) => {
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

}
