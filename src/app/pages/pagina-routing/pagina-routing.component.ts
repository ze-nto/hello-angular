import { Component } from '@angular/core';
import { ListaService } from './../../servicos/lista.service';

export type ItemCompra = {
  id: number;
  nome: string;
  categoria: string;
  quantidade: string | number;
  marca: string;
  preco: number;
  validade: string | null;
} 

@Component({
  selector: 'app-pagina-routing',
  templateUrl: './pagina-routing.component.html',
  styleUrl: './pagina-routing.component.scss'
})
export class PaginaRoutingComponent {
  listaCompras: ItemCompra[] = [];

  constructor(private listaService: ListaService){}

  ngOnInit(){
    this.listaCompras = this.listaService.getLista()
  }

}







