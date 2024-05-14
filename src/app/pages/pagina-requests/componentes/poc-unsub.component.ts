import { Component } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { PocService } from '../poc.service';

@Component({
  selector: 'app-poc-unsub',
  template: `
  <app-base [nome]="nome"
    [valor]="valor" estilo="bg-secondary">
  </app-base>
`
})
export class PocUnsubComponent {
  nome = 'Componente com unsubscribe';
  valor: string = '';

  sub: Subscription[] = [];

  constructor(private service: PocService) { }

  ngOnInit() {
    this.sub.push(this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
      .subscribe(novoValor => this.valor = novoValor));
  }

  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe());
    console.log(`${this.nome} foi destruido`);
  }

}
