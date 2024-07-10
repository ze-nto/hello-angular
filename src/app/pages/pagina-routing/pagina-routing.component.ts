import { Component } from '@angular/core';
import { Produto } from '../../servicos/produto';
import { ListaService } from './../../servicos/lista.service';
 

@Component({
  selector: 'app-pagina-routing',
  templateUrl: './pagina-routing.component.html',
  styleUrl: './pagina-routing.component.scss'
})
export class PaginaRoutingComponent {
  listaCompras: Produto[] = [];

  constructor(private listaService: ListaService){}

  ngOnInit(){
    this.listaService.getLista().subscribe(lista => {
      this.listaCompras = lista
    })
    
  }

}







