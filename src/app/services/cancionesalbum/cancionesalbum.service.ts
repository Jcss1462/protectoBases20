import { Injectable } from '@angular/core';


//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Canalb } from './canalb';
////////////////


@Injectable({
  providedIn: 'root'
})
export class CancionesalbumService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/cancionesalbum'

  constructor(private http: HttpClient) { 
    console.log("funcionando servico canciones artista");
  }

  getCanciones(id: string): Observable<Canalb[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Canalb[]>(this.resourceURL);

    } else {
      return this.http.get<Canalb[]>(this.resourceURL + "?albid=" + id);
    }
  }
}
