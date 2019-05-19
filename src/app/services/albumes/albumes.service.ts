import { Injectable } from '@angular/core';

//conexion con la base de datos
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album';
////////////////


@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  //conecto con el elmento json del link
  resourceURL = 'http://localhost:3000/api/albumes';

  constructor(private http: HttpClient) {
    console.log("funcionando servico albumes");
  }


  getAlbum(id: string): Observable<Album[]> {
    //get Artists from api server
    
    if (id == null) {
      return this.http.get<Album[]>(this.resourceURL);
    } else {
      return this.http.get<Album[]>(this.resourceURL + "?albid=" + id);
    }
  }


}
