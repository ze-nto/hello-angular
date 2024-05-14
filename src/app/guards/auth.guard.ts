import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';


  export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {    
    let router = inject(Router)
    let userService = inject(UsuarioService)
       
    if(userService.isUsuarioAutenticado()){
      return true;
    }
    router.navigate(['/login'])
    return false;  
  }
 


