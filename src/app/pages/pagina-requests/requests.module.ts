import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { PocAsyncComponent } from './componentes/poc-async.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until.component';
import { PocTakeComponent } from './componentes/poc-take.component';
import { PocUnsubComponent } from './componentes/poc-unsub.component';
import { PocComponent } from './componentes/poc.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { PaginaRequestsComponent } from './pagina-requests.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { UnsubComponent } from './unsub/unsub.component';



@NgModule({
  declarations: [
    PaginaRequestsComponent,
    BaseComponent,
    UnsubComponent,
    PocAsyncComponent,
    PocTakeComponent,
    PocTakeUntilComponent,
    PocUnsubComponent,
    PocComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RequestsRoutingModule,
  ]
})
export class RequestsModule { }
