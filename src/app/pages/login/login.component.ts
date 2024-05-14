import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../servicos/usuario';
import { UsuarioService } from '../../servicos/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   usuario: Usuario = {email: '', senha: '', authStatus: false};

  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(){
    this.usuario = this.usuarioService.getUsuarioAtual();
    if(this.usuario.authStatus){
      this.usuarioService.fazerLogin(this.usuario)
    }
  }

  fazerLogin(){
    this.usuarioService.fazerLogin(this.usuario)
  }
}
