import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-modificar',
  templateUrl: './persona-modificar.component.html',
  styleUrls: ['./persona-modificar.component.css']
})
export class PersonaModificarComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Output() onConfirmar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  persona: Persona;
  private subs = new Subscription();

  constructor(private perServ: PersonaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    const obtenerSubs = this.perServ.obtenerId(this.id).subscribe({
      next: (pers: Persona) => {
        this.persona = pers;
        alert(pers.nombre + " " + pers.apellido);
      },
      error: () => {
        alert('Error');
      }
    });

    this.subs.add(obtenerSubs);
  }

  guardarPersona() {
    this.subs.add(
      this.perServ.modificar(this.persona).subscribe({
        next: (per: Persona) => {
          alert('Modificando persona ' + per.nombre + " " + per.apellido);
          this.onConfirmar.emit();
          alert('Persona modificada');
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
}
