import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from './curso';
import { CursosService } from './services/cursos.service';

export const cursosResolverGuard: ResolveFn<Curso> = (route, state ): Observable<Curso>  => {
  if(route.params && route.params['id']){
   return inject(CursosService).loadById(route.params['id'])
  }
  
  return of({id: null, nome: null})
};
