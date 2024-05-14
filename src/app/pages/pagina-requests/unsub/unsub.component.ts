import { Component } from '@angular/core';
import { PocService } from '../poc.service';
import { animacoes } from './animatio';

@Component({
  selector: 'app-unsub',
  templateUrl: './unsub.component.html',
  styleUrl: './unsub.component.css',
  animations: [animacoes]
})
export class UnsubComponent {
  mostrarComponentes = true;
  entrada = true;

  constructor(private service: PocService) { }

  ngOnInit() {
  }

  ngOnChange(){
    this.entrada = false
  }

  emitirValor(valor: string) {
    this.service.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
