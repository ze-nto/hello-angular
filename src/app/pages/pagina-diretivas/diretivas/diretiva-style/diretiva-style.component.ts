import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  templateUrl: './diretiva-style.component.html',
  styleUrl: './diretiva-style.component.scss'
})
export class DiretivaStyleComponent {
  
  ativo: boolean = false;
  mudarAtivo(){
    this.ativo = !this.ativo;
  }
  

}
