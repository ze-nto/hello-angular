import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-pipes',
  templateUrl: './pagina-pipes.component.html',
  styleUrl: './pagina-pipes.component.scss'
})
export class PaginaPipesComponent {
  nomeCurso: string = 'Angular';
  cargaHoraria: number = 0;
  valorInicial: number = 11;
  novoValor: number = 0;

  onMudouValor(evento: any){
    this.novoValor = evento.valor;
  }
}
