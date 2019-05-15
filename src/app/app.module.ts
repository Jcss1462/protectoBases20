import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaComponent } from './artista/artista.component';
import { CancionComponent } from './cancion/cancion.component';
import { GeneroComponent } from './genero/genero.component';
import { MainPageComponent } from './main-page/main-page.component';

//http
import { HttpClientModule } from '@angular/common/http';



//servicios
import{ArtistasService} from './services/api';
import{CancionesartistaService} from './services/api';
import{AlbumesartistaService} from './services/api';
import { AlbumesComponent } from './albumes/albumes.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    CancionComponent,
    GeneroComponent,
    MainPageComponent,
    AlbumesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ArtistasService,
    CancionesartistaService,
    AlbumesartistaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
