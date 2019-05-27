import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cancion } from './cancion';
////////////////

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/canciones'

  constructor(private http: HttpClient) {
    console.log("funcionando servico cancion");
  }

  getCancion(id: string): Observable<Cancion[]> {
    //get Artists from api server

    if (id == null) {
      return this.http.get<Cancion[]>(this.resourceURL);

    } else {
      return this.http.get<Cancion[]>(this.resourceURL + "?id=" + id);
    }
  }

  downloadsSong(id: string, verb: string): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.resourceURL + "?id=" + id + verb);
  }

}
