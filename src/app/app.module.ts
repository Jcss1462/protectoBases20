import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaComponent } from './artista/artista.component';
import { CancionComponent } from './cancion/cancion.component';
import { GeneroComponent } from './genero/genero.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
//http
import { HttpClientModule } from '@angular/common/http';



//servicios
import{ArtistasService} from './services/api';
import{CancionesartistaService} from './services/api';
import{AlbumesartistaService} from './services/api';
import{CancionesService} from './services/api';
import{AlbumesService} from './services/api';
import{CancionesalbumService} from './services/api';
import{BusquedaartistaService} from './services/api';
import{BusquedacancionService} from './services/api';
import{BusquedaletraService} from './services/api';
import{ImagenesartistasService} from './services/api';


//pipes
import { SafeurlPipe } from './pipes/safeurl/safeurl.pipe';







@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    CancionComponent,
    GeneroComponent,
    MainPageComponent,
    AlbumesComponent,
    SafeurlPipe,
    BusquedaComponent,
    ImagenesComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ArtistasService,
    CancionesartistaService,
    AlbumesartistaService,
    CancionesService,
    AlbumesService,
    CancionesalbumService,
    BusquedaartistaService,
    BusquedacancionService,
    BusquedaletraService,
    ImagenesartistasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
