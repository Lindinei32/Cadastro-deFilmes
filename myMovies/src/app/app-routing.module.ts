import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { PainelComponent } from './painel/painel.component';
import { GenerosComponent } from './generos/generos.component';

const routes: Routes = [
  { path : '' , redirectTo : 'painel', pathMatch : 'full' },
  { path : 'painel'  , component: PainelComponent },
  { path : 'filmes' , component: FilmesComponent },
  {path : 'generos' , component: GenerosComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
