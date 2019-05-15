import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './artist';
////////////////

@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/artistas';

  constructor(private http: HttpClient) {
    console.log("funcionando servico artsta 2.0");
  }


  getArtists(id: string): Observable<Artist[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Artist[]>(this.resourceURL);

    } else {
      return this.http.get<Artist[]>(this.resourceURL + "?id=" + id);
    }
  }
}
