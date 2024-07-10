import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-pipes',
  templateUrl: './pagina-pipes.component.html',
  styleUrl: './pagina-pipes.component.scss'
})
export class PaginaPipesComponent {
  nomeCurso: string; 
  cargaHoraria: number; 
  valorInicial: number; 
  novoValor: number; 

  constructor() {
    this.nomeCurso = 'Angular',
    this.cargaHoraria = 0;
    this.valorInicial = 11;
    this.novoValor = 0;
  
  }
  handleClick(){
    this.novoValor++
  }
  onMudouValor(evento: any){
    this.novoValor = evento.valor;
  }
}
