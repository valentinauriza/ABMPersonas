import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaEliminarComponent } from './personas/persona-eliminar/persona-eliminar.component';
import { PersonaModificarComponent } from './personas/persona-modificar/persona-modificar.component';
import { PersonaContenedorComponent } from './personas/persona-contenedor/persona-contenedor.component';
import { PersonaService } from './services/persona.service';
import { PersonaModificar2Component } from './personas/persona-modificar2/persona-modificar2.component';
import { TipoDocService } from './services/tipo-doc.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListadoComponent,
    PersonaAltaComponent,
    PersonaEliminarComponent,
    PersonaModificarComponent,
    PersonaContenedorComponent,
    PersonaModificar2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PersonaService, TipoDocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
