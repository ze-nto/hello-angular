import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter()

  incrementa(){
     this.valor++;
     this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    if(this.valor > 0){
      this.valor--;
      this.mudouValor.emit({novoValor: this.valor})
    }
  }

  
}
