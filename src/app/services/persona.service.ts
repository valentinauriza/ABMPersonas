import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl: string = 'https://632b6ba55568d3cad86fae02.mockapi.io/persona/';
  listado: Persona[];
  pers: Persona;

  constructor(private http: HttpClient) { }

  obtenerListado(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  alta(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  eliminar(persona: Persona): Observable<any> {
    return this.http.delete(this.apiUrl + persona.id);
  }

  obtenerId(id: string): Observable<Persona> {
    return this.http.get<Persona>(this.apiUrl + id);
  }

  modificar(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.apiUrl + persona.id, persona);
  }
}
