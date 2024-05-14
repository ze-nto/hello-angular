import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PocService } from '../poc.service';

@Component({
  selector: 'app-poc-async',
  template: `
    <app-base [nome]="nome"
      [valor]="valor$ | async" estilo="bg-success">
    </app-base>
  `
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome = 'Componente com async';
  valor$: Observable<string> | null = new Observable();

  constructor(private service: PocService) { }

  ngOnInit() {
    this.valor$ = this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }

}