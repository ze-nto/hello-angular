import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-diretivas',
  templateUrl: './pagina-diretivas.component.html',
  styleUrls: ['./pagina-diretivas.component.css']
})
export class PaginaDiretivasComponent {

disciplinas: string[] = ['Angular', 'Spring Boot', 'Typescript', 'Design'];
ativo: boolean = false;

mudarAtivo(){
  this.ativo = !this.ativo;
}



}