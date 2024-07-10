import { Component } from '@angular/core';
import { UsuarioService } from './servicos/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, Angular';
  currentUser: string = ''
  openSidenav: boolean = false

  constructor(
    private usuarioService: UsuarioService,
  ){  
  }

  ngOnInit(){
     
    this.currentUser = this.usuarioService.getUsuarioAtual().email
  }

  sum(a: number, b: number) {
    return a + b;
  }

  mostrarMenu(): boolean{
    if (this.usuarioService.isUsuarioAutenticado()){
      return true;
    }
    return false;
  }

  logout(){
    this.usuarioService.fazerLogout();
  }

  toggleSidenav(){
    this.openSidenav = !this.openSidenav;
    console.log(this.openSidenav)
  }

}

// interface ItemSubmenu{
//   nomeExibicao: string,
//   link: string
// }

// interface ItemMenu {
//   grupo: string
//   nomeExibicao: string,
//   link: string,
//   icone: string,
//   papeis: string[],
//   filhas: ItemSubmenu[] | null
// }

// menuService.createMenu(papel: string){
//   let menu = []
//   let menuItens = {
//     relatorio: {
//       grupo: '',
//       nomeExibicao: '',
//       link: '',
//       icone: '',
//       papeis: [],
//       filhas: null
//     } as ItemMenu,
//     dashboard: {},
//     zonas: {},
//     centrais: {},
//     bairros: {},
//     regisoes: {}
//     }
    

//   for(var chave in menuItens){
//     if(chave['papeis'].contains(papel)){
//       menu.push(menuItens[`${chave}`])
//     }

//   }

// }