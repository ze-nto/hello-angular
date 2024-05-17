import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { cursosResolverGuard } from './cursos-resolver.guard';
import { PaginaRequestsComponent } from './pagina-requests.component';
import { UnsubComponent } from './unsub/unsub.component';

const requestsRoutes: Routes = [
    {path: '', component: PaginaRequestsComponent},
    {path: 'unsub', component: UnsubComponent},
    {path: 'novo', component: CursosFormComponent, resolve: {
      curso: cursosResolverGuard
    }},
    {path: 'editar/:id', component: CursosFormComponent, resolve: {
      curso: cursosResolverGuard
    }},
];

@NgModule({
  imports: [RouterModule.forChild(requestsRoutes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
