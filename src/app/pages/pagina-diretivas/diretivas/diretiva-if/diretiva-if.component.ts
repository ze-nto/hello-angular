import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-if',
  templateUrl: './diretiva-if.component.html',
  styleUrl: './diretiva-if.component.scss'
})
export class DiretivaIfComponent {

  acao: string = 'Mostrar';
  mostrarCursos: boolean = false;

  onClick(){
    this.mostrarCursos = !this.mostrarCursos
    if(this.mostrarCursos) {
      this.acao = 'Esconder';
    }else{
      this.acao = 'Mostrar'
    }
  }
}
