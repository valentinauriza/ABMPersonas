import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDoc } from '../models/tipo-doc';

@Injectable({
  providedIn: 'root'
})
export class TipoDocService {
  private apiUrl: string = 'https://632b6ba55568d3cad86fae02.mockapi.io/TipoDni/';

  constructor(private http: HttpClient) { }

  obtenerListado(): Observable<TipoDoc[]> {
    return this.http.get<TipoDoc[]>(this.apiUrl);
  }
}
