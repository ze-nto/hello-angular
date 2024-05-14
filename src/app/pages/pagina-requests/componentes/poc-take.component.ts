import { Component } from '@angular/core';
import { take, tap } from 'rxjs';
import { PocService } from '../poc.service';

@Component({
  selector: 'app-poc-take',
  template: `
    <app-base [nome]="nome"
      [valor]="valor" estilo="bg-info">
    </app-base>
  `
})
export class PocTakeComponent {
  nome = 'Componente com take';
  valor: string = '';

  constructor(private service: PocService) {}

  ngOnInit() {
    this.service.getValor()
      .pipe(
        tap(v => console.log(this.nome, v)),
        take(1)
      )
      .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido`);
  }
}
