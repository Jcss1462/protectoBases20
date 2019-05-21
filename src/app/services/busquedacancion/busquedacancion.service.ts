import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buscan } from './buscan';
////////////////

@Injectable({
  providedIn: 'root'
})
export class BusquedacancionService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/busquedacancion';

  constructor(private http: HttpClient) {
    console.log("funcionando servico busqueda cancion");
  }


  getCancion(id: string): Observable<Buscan[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Buscan[]>(this.resourceURL);

    } else {
      return this.http.get<Buscan[]>(this.resourceURL + "?busqueda=" + id);
    }
  }

}
