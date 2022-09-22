import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-eliminar',
  templateUrl: './persona-eliminar.component.html',
  styleUrls: ['./persona-eliminar.component.css']
})
export class PersonaEliminarComponent implements OnInit, OnDestroy {
  @Input() persona: Persona;
  @Output() onEliminar = new EventEmitter();

  private subs = new Subscription();

  constructor(private perServ: PersonaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  eliminar() {
    this.subs.add(
      this.perServ.eliminar(this.persona).subscribe({
        next: () => {
          this.onEliminar.emit();
          alert('Eliminando ' + this.persona.nombre);
        },
        error: () => {
          alert('Error');
        }
      })
    )
  }
}
