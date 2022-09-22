import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaContenedorComponent } from './persona-contenedor.component';

describe('PersonaContenedorComponent', () => {
  let component: PersonaContenedorComponent;
  let fixture: ComponentFixture<PersonaContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaContenedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
