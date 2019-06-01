import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//componentes
import { MainPageComponent }   from './main-page/main-page.component';
import { GeneroComponent }   from './genero/genero.component';
import { ArtistaComponent }   from './artista/artista.component';
import { CancionComponent }   from './cancion/cancion.component';
import {AlbumesComponent} from './albumes/albumes.component';
import {BusquedaComponent} from './busqueda/busqueda.component';
import {ImagenesComponent} from './imagenes/imagenes.component';
import {EdicionComponent} from './edicion/edicion.component';
import {BusquedaImagenComponent} from './busqueda-imagen/busqueda-imagen.component';

const routes: Routes = [

  { path: 'main', component: MainPageComponent },
  { path: 'genero', component: GeneroComponent },
  { path: 'artista', component: ArtistaComponent },
  { path: 'cancion', component: CancionComponent },
  { path: 'album', component: AlbumesComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'edicion', component: EdicionComponent },
  { path: 'busquedaimagen', component: BusquedaImagenComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
