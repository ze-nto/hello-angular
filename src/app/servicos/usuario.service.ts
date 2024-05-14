import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioData } from '../../assets/data/user-data';
import { UserAuthStatus } from './user-auth-status';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  userAuthStatus:  UserAuthStatus = new UserAuthStatus();
  mostrarMenu = new EventEmitter<boolean>()
  userData: UsuarioData = UsuarioData.getInstance()
  routeA: ActivatedRoute = new ActivatedRoute()
  
  constructor( private router: Router) {
   }

  fazerLogin(usuario: Usuario){
    let usuarioEncontrado = this.userData.getUsuarios().filter(user => usuario.email == user.email && usuario.senha == user.senha).pop();
    if(usuarioEncontrado != undefined){
      usuarioEncontrado.authStatus = true
      this.userData.setUsuarioAtual(usuarioEncontrado)
      this.mostrarMenu.emit(true);
      this.router.navigate(['routing']);
      
    }else{
      this.userData.limparUsuarioAtual()
      this.mostrarMenu.emit(false);
      throw new Error('Usuário não cadastrado')
    }
  }
  
  fazerLogout(){
    this.userData.limparUsuarioAtual();
    this.mostrarMenu.emit(false);
    this.router.navigate(['login'])
  }

  isUsuarioAutenticado(){
    let usuarioAtual = this.userData.getUsuarioAtual()
    if(usuarioAtual.authStatus){
      return true;
    }
    return false;
  }

  getListaUsuario(){
    return this.userData.getUsuarios();
  }

  addUsuario(usuario: Usuario){
    this.userData.addUsuario(usuario);
  }

  getUsuarioAtual(){
    return this.userData.getUsuarioAtual();
  }

}
