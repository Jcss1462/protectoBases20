import { Injectable } from '@angular/core';


//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imartist } from './imartist';
////////////////

@Injectable({
  providedIn: 'root'
})
export class ImagenesartistasService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/imagenartista'

  constructor(private http: HttpClient) { 
    console.log("funcionando servico imagen artista");
  }

  getArtists(id: string): Observable<Imartist[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Imartist[]>(this.resourceURL);

    } else {
      return this.http.get<Imartist[]>(this.resourceURL + "?id=" + id);
    }
  }

}
