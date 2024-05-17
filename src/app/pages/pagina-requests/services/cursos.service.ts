import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Curso } from '../curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}/cursos`
  constructor(private http: HttpClient) { }


  list(){
    return this.http.get<Curso[]>(this.API).pipe(delay(2000))
  }

  private create(curso: Curso){
    return this.http.post(this.API, curso).pipe(take(1))
  }

  loadById(id: string){
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1))
  }
  
  private update(curso: Curso){
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1))
  }

  save(curso: Curso){
    if(curso.id){
      return this.update(curso)
    }
    return this.create(curso)
  }

  remove(curso: Curso){
    return this.http.delete(`${this.API}/${curso.id}`).pipe(take(1));
  }

}
