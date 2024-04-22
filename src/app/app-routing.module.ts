import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DataFormComponent } from './pages/data-form/data-form.component';
import { ItemNaoEncontradoComponent } from './pages/pagina-routing/item-nao-encontrado/item-nao-encontrado.component';
import { PaginaRoutingComponent } from './pages/pagina-routing/pagina-routing.component';
import { PaginaServicosComponent } from './pages/pagina-servicos/pagina-servicos.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';

const routes: Routes = [
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'dataForm', component: DataFormComponent },
  { path: 'servicos', component: PaginaServicosComponent },
  { path: 'routing', component: PaginaRoutingComponent },
  { path: 'routing/:id', component: PaginaRoutingComponent },
  { path: 'nao-encontrado', component: ItemNaoEncontradoComponent },
  { path: '**', component: PageNotFoundComponent},
  { path: '', pathMatch: 'full', redirectTo: 'templateForm' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
