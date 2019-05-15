import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albart } from './Albart';
////////////////

@Injectable({
  providedIn: 'root'
})
export class AlbumesartistaService {

   //conecto con el elmento json del link
   resourceURL = 'http://localhost:3000/api/albumesArtistas';

  constructor(private http: HttpClient) { 
    console.log("funcionando servico albumes artistas 2.0");
  }

  getArtists(id: string): Observable<Albart[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Albart[]>(this.resourceURL);

    } else {
      
      return this.http.get<Albart[]>(this.resourceURL + "?artid=" + id);
    }
  }
}
