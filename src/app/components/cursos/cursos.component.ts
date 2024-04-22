import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent {

  valor: string = "Angular com Loiane";
  valorAtual: string = '';
  valorSalvo: string = '';

  constructor(){}

  botaoClicado(){
    alert("Você me clicou")
  }



  onKeyUp(valor: Event) {
    this.valorSalvo = (<HTMLInputElement>valor.target).value;
  
  }

  ngOnInit() {

  }
}
