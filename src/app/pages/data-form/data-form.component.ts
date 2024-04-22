import { Component } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls:['./data-form.component.css']
})
export class DataFormComponent {

  nomeCurso: string = 'Angular';
  cargaHoraria: number = 0;
  valorInicial: number = 11;
  novoValor: number = 0;

  onMudouValor(evento: any){
    this.novoValor = evento.valor;
  }
}
