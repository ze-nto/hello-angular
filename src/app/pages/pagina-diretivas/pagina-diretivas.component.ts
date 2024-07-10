import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-diretivas',
  templateUrl: './pagina-diretivas.component.html',
  styleUrls: ['./pagina-diretivas.component.css']
})
export class PaginaDiretivasComponent {

disciplinas: string[];
ativo: boolean;

constructor(){
  this.ativo = false;
  this.disciplinas = ['Angular', 'Spring Boot', 'Typescript', 'Design'];
}

mudarAtivo(){
  this.ativo = !this.ativo;
}



}