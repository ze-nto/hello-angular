import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Curso } from '../curso';
import { CrudService } from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso> {

constructor( protected override http: HttpClient) { 
  super(http, `${environment.API}cursos`)
}

}
