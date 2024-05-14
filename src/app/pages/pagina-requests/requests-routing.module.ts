import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaRequestsComponent } from './pagina-requests.component';
import { UnsubComponent } from './unsub/unsub.component';

const requestsRoutes: Routes = [
    {path: '', component: PaginaRequestsComponent},
    {path: 'unsub', component: UnsubComponent}
];

@NgModule({
  imports: [RouterModule.forChild(requestsRoutes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
