import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivaClassComponent } from './diretivas/diretiva-class/diretiva-class.component';
import { DiretivaContentComponent } from './diretivas/diretiva-content/diretiva-content.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaStyleComponent } from './diretivas/diretiva-style/diretiva-style.component';
import { DiretivaSwitchComponent } from './diretivas/diretiva-switch/diretiva-switch.component';
import { DiretivasCustomizadasComponent } from './diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { PaginaDiretivasComponent } from './pagina-diretivas.component';
// import { PaginaDiretivasComponent } from './pages/pagina-diretivas/pagina-diretivas.component';

const diretivasRoutes: Routes = [
  { path: 'diretivas', component: PaginaDiretivasComponent, children:[
    { path: '', pathMatch: 'full', redirectTo: 'class' },
    { path: 'if', component: DiretivaIfComponent },
    { path: 'class', component: DiretivaClassComponent },
    { path: 'content', component: DiretivaContentComponent },
    { path: 'for', component: DiretivaForComponent },
    { path: 'style', component: DiretivaStyleComponent },
    { path: 'switch', component: DiretivaSwitchComponent },
    { path: 'customizadas', component: DiretivasCustomizadasComponent },

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(diretivasRoutes)],
  exports: [RouterModule]
})
export class DiretivasRoutingModule { }
