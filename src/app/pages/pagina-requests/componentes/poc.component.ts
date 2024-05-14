import { Component, OnDestroy, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PocService } from '../poc.service';

@Component({
  selector: 'app-poc',
  template: `
  <app-base [nome]="nome"
    [valor]="valor" estilo="bg-danger">
  </app-base>
`
})
export class PocComponent implements OnInit, OnDestroy{
  nome = 'Componente sem unsubscribe';
  valor: string = '';

  constructor(private service: PocService) { }

  ngOnInit() {
    this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }

}
