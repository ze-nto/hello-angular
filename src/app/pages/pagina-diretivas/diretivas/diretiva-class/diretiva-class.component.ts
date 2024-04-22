import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-class',
  templateUrl: './diretiva-class.component.html',
  styleUrl: './diretiva-class.component.scss'
})
export class DiretivaClassComponent {
  
  favorito: any  = {
    um: false,
    dois: false
  }
  onFavorite(fav: string){
    this.favorito[fav] = !this.favorito[fav];
  }
}
