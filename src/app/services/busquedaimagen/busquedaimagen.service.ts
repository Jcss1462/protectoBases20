import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Busimg } from './busimg';
////////////////

@Injectable({
  providedIn: 'root'
})
export class BusquedaimagenService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/busquedaimagen';

  constructor(private http: HttpClient) {
    console.log("funcionando servico busqueda imagen");
  }

  getArtists(filename: string): Observable<Busimg[]> {
    //get Artists from api server
      return this.http.get<Busimg[]>(this.resourceURL + "?filename=" + filename);
  }
}
