import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Busart } from './busart';
////////////////

@Injectable({
  providedIn: 'root'
})
export class BusquedaartistaService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/busquedaartista';

  constructor(private http: HttpClient) {
    console.log("funcionando servico busqueda artista");
  }


  getArtists(id: string): Observable<Busart[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Busart[]>(this.resourceURL);

    } else {
      return this.http.get<Busart[]>(this.resourceURL + "?busqueda=" + id);
    }
  }

}
