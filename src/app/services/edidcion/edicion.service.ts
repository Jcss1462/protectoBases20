import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edi } from './edi';

@Injectable({
  providedIn: 'root'
})
export class EdicionService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/imagen'

  constructor(private http: HttpClient) {
    console.log("funcionando servico edicion");
  }

  getArtists(id: string): Observable<Edi[]> {
    //get Artists from api server

    if (id == null) {
      return this.http.get<Edi[]>(this.resourceURL);

    } else {
      return this.http.get<Edi[]>(this.resourceURL + "?id=" + id);
    }
  }

  getEditable(id: string, verb: string): Observable<Edi[]> {
    //get Artists from api server


    return this.http.get<Edi[]>(this.resourceURL + "?id=" + id+verb);

  }
}
