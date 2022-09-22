import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaContenedorComponent } from './personas/persona-contenedor/persona-contenedor.component';

const routes: Routes = [
  { path: 'contenedor', component: PersonaContenedorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
