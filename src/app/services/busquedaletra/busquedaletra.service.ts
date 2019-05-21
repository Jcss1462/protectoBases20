import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buslet } from './buslet';
////////////////

@Injectable({
  providedIn: 'root'
})
export class BusquedaletraService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/busquedaletra';

  constructor(private http: HttpClient) {
    console.log("funcionando servico busqueda letra");
  }


  getCancion(id: string): Observable<Buslet[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Buslet[]>(this.resourceURL);

    } else {
      return this.http.get<Buslet[]>(this.resourceURL + "?busqueda=" + id);
    }
  }

}
