import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { TipoDoc } from 'src/app/models/tipo-doc';
import { PersonaService } from 'src/app/services/persona.service';
import { TipoDocService } from 'src/app/services/tipo-doc.service';

@Component({
  selector: 'app-persona-modificar2',
  templateUrl: './persona-modificar2.component.html',
  styleUrls: ['./persona-modificar2.component.css']
})
export class PersonaModificar2Component implements OnInit, OnDestroy {
  private subs = new Subscription();
  tipoDoc: TipoDoc[];
  persona: Persona;

  @Input() id: string;
  @Output() onConfirmar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  constructor(private perServ: PersonaService, private docServ: TipoDocService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    const obtenerPersonaId = this.perServ.obtenerId(this.id).subscribe({
      next: (per: Persona) => {
        this.persona = per;
        alert('Actualizando a ' + per.nombre);
      },
      error: () => {
        alert('Error');
      }
    });
    this.subs.add(obtenerPersonaId);

    this.cargarCombo();
  }

  guardarPersona() {
    this.subs.add(
      this.perServ.modificar(this.persona).subscribe({
        next: (per: Persona) => {
          alert('Cargando persona ' + per.nombre + " " + per.apellido);
          this.onConfirmar.emit();
          alert('Persona cargada');
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }

  cancelar() {
    this.onCancelar.emit();
  }

  cargarCombo() {
    this.subs.add(
      this.docServ.obtenerListado().subscribe({
        next: (lista: TipoDoc[]) => {
          this.tipoDoc = lista;
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }
}
