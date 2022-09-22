import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css']
})
export class PersonaListadoComponent implements OnInit, OnDestroy {
  @Input() listado: Persona[];
  @Output() onAgregarPersona = new EventEmitter();
  //el modificar va a devolver un string que es el ID
  @Output() onModificar = new EventEmitter<string>();

  private subs = new Subscription();

  constructor(private perServ: PersonaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarListado();
  }

  agregarPersona() {
    this.onAgregarPersona.emit();
  }

  cargarListado() {
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

  //obtener la persona por medio del ID
  modificar(per: Persona) {
    //aca se emite la persona segun su id
    this.onModificar.emit(per.id);
  }
}