import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../shared/models/Estado';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private http: HttpClient) { }


  getEstados(){
    return this.http.get<Estado[]>('./assets/data/estados.json')
  }

  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', descricao: 'Dev Júnior'},
      { nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pleno'},
      { nome: 'Dev', nivel: 'Senior', descricao: 'Dev Senior'}
    ]
  }


  getTecnologias() {
    return [
      { nome: 'Java', descricao: 'Java'},
      { nome: 'PHP', descricao: 'PHP'},
      { nome: 'JavaScript', descricao: 'JavaScript'},
      { nome: 'Ruby', descricao: 'Ruby'},
    ]
  }

  getNewsletter() {
    return [
      { valor: 's', descricao: 'Sim'},
      { valor: 'n', descricao: 'Não'}
    ]
  }

}
