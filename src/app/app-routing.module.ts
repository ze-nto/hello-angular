import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { canActivate } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { DadosComponent } from './pages/dados/dados.component';
import { DataFormComponent } from './pages/data-form/data-form.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaGraficosComponent } from './pages/pagina-graficos/pagina-graficos.component';
import { PaginaPipesComponent } from './pages/pagina-pipes/pagina-pipes.component';
import { ProductListComponent } from './pages/pagina-products/product-list/product-list.component';
import { ItemNaoEncontradoComponent } from './pages/pagina-routing/item-nao-encontrado/item-nao-encontrado.component';
import { PaginaRoutingComponent } from './pages/pagina-routing/pagina-routing.component';
import { PaginaServicosComponent } from './pages/pagina-servicos/pagina-servicos.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'templateForm', component: TemplateFormComponent, canActivate: [canActivate] },
  { path: 'dataForm', component: DataFormComponent, canActivate: [canActivate] },
  { path: 'pipes', component: PaginaPipesComponent, canActivate: [canActivate] },
  { path: 'dados', component: DadosComponent, canActivate: [canActivate] },
  { path: 'servicos', component: PaginaServicosComponent, canActivate: [canActivate] },
  { path: 'produtos', component: ProductListComponent},
  { path: 'nao-encontrado', component: ItemNaoEncontradoComponent, canActivate: [canActivate] },
  { path: 'graficos', component: PaginaGraficosComponent, canActivate: [canActivate] },
  { path: 'diretivas', 
          loadChildren: () => import('./pages/pagina-diretivas/diretivas.module')
            .then(module => module.DiretivasModule), canActivate: [canActivate] },
  { path: 'rxjs', 
          loadChildren: () => import('./reactive-rxjs/reactive-rxjs.module')
            .then(module => module.ReactiveRxjsModule), canActivate: [canActivate] },
  { path: 'requests', 
          loadChildren: () => import('./pages/pagina-requests/requests.module')
            .then(module => module.RequestsModule), canActivate: [canActivate] },
  { path: 'routing', component: PaginaRoutingComponent, canActivate: [canActivate] },
  { path: 'routing/:id', component: PaginaRoutingComponent, canActivate: [canActivate] },
  { path: 'upload', 
    loadChildren: () => import('./pages/pagina-upload/upload.module')
    .then(module => module.UploadModule), canActivate: [canActivate] 
  },
  { path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
