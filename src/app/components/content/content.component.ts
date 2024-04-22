import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  mostrar: boolean = false;
  
  mostrarConteudo(){
    this.mostrar = !this.mostrar;
  }
}
