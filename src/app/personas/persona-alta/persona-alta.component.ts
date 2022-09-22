import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { TipoDoc } from 'src/app/models/tipo-doc';
import { PersonaService } from 'src/app/services/persona.service';
import { TipoDocService } from 'src/app/services/tipo-doc.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css']
})
export class PersonaAltaComponent implements OnInit {
  persona: Persona;
  tipoDoc: TipoDoc[];
  private subs = new Subscription();

  @Output() onConfirmar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  constructor(private perServ: PersonaService, private docServ: TipoDocService) { }

  ngOnInit(): void {
    this.persona = new Persona();
    this.cargarCombo();
  }

  guardarPersona() {
    this.subs.add(
      this.perServ.alta(this.persona).subscribe({
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
