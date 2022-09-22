import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaModificar2Component } from './persona-modificar2.component';

describe('PersonaModificar2Component', () => {
  let component: PersonaModificar2Component;
  let fixture: ComponentFixture<PersonaModificar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaModificar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaModificar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
