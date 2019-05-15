import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//componentes
import { MainPageComponent }   from './main-page/main-page.component';
import { GeneroComponent }   from './genero/genero.component';
import { ArtistaComponent }   from './artista/artista.component';
import { CancionComponent }   from './cancion/cancion.component';

const routes: Routes = [

  { path: 'main', component: MainPageComponent },
  { path: 'genero', component: GeneroComponent },
  { path: 'artista', component: ArtistaComponent },
  { path: 'cancion', component: CancionComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
