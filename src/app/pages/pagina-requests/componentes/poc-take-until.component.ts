import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { PocService } from '../poc.service';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-base [nome]="nome"
      [valor]="valor" estilo="bg-primary">
    </app-base>
  `
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {

  nome = 'Componente com takeUntil';
  valor: string = '';

  unsub$ = new Subject();

  constructor(private service: PocService) {}

  ngOnInit() {
    this.service.getValor()
      .pipe(
        tap(v => console.log(this.nome, v)),
        takeUntil(this.unsub$)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    this.unsub$.next(1);
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido`);
  }
}
