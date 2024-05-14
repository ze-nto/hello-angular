import { Usuario } from '../../app/servicos/usuario';

export class UsuarioData {
  
  private static instance: UsuarioData = new UsuarioData();
  private usuarios: Usuario[] = [{
    email: 'jose@email.com',
    senha: '12345',
    authStatus: false
  }]

  private usuarioAtual: Usuario = {
    email: 'jose@email.com',
    senha: '12345',
    authStatus: true
  }
  
  private constructor(){
  }

  public static getInstance (){
    if (!UsuarioData.instance) {
      UsuarioData.instance = new UsuarioData();
    }
    return UsuarioData.instance;   
  }

  getUsuarios(){
    return this.usuarios;
  }

  addUsuario(usuario: Usuario){
    this.usuarios.push(usuario);
  }

  setUsuarioAtual(usuario: Usuario){
    this.usuarioAtual.authStatus = usuario.authStatus
    this.usuarioAtual.email = usuario.email
    this.usuarioAtual.senha = usuario.senha
  }

  getUsuarioAtual(){
    return this.usuarioAtual;
  }

  limparUsuarioAtual(){
    this.usuarioAtual = {
      email: '',
      senha: '',
      authStatus: false
    }

    
  }
}

