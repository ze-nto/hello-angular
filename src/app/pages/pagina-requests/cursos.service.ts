import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}/cursos`
  constructor(private http: HttpClient) { }


  list(){
    return this.http.get<Curso[]>(this.API).pipe(delay(2000))
  }

}
