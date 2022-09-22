import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-contenedor',
  templateUrl: './persona-contenedor.component.html',
  styleUrls: ['./persona-contenedor.component.css']
})
export class PersonaContenedorComponent implements OnInit, OnDestroy {
  formAlta: boolean = false;
  formMod: boolean = false;

  idSeleccionado: string;

  persona: Persona;
  listado: Persona[];

  private subs = new Subscription();

  constructor(private perServ: PersonaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  mostrarFormAlta(visible: boolean) {
    this.formAlta = visible;
    this.formMod = false;
    alert('Alta');
  }

  mostrarFormModif(id: string) {
    this.formMod = true;
    this.formAlta = false;
    alert('Modificacion');

    //carga el codigo en una variable y le asigna lo que recibe por el output
    this.idSeleccionado = id;
  }

  actualizarListado() {
    this.subs.add(
      this.perServ.obtenerListado().subscribe({
        next: (lista: Persona[]) => {
          this.listado = lista;
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }
}
