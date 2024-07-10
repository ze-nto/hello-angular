import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from '../../environments/environment';
import { Produto } from './produto';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  lista: Produto[];
  url: string; 

  constructor(private http: HttpClient) {
    this.lista = [];
    this.url = environment.API + '/listaDeCompras'
   }

  getLista(){
   return this.http.get<Produto[]>(this.url).pipe(take(1))
  }

  getItem(id: number){
    return this.http.get<Produto>(`${environment.API}/listaDeCompras/${id}`)
  }
}

/*
CASOS DE TESTE

Tenho um serviço que provê uma lista de produtos de compras
Este serviço tem como dependencia um cliente HTTP que faz requisições para um servidor
Possui dois métodos que faz requisições para urls do servervidor
Um método deve retornar um array de produtos
O segundo método deve retornar um produto que possui o id especificado na url 


*/


