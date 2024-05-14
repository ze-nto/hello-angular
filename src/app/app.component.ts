import { Component } from '@angular/core';
import { UsuarioService } from './servicos/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, Angular';

  constructor(private usuarioService: UsuarioService,
  ){
    
  }

  ngOnInit(){
     
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

}
