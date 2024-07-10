import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from '../../guards/auth.guard';
import { PaginaUploadComponent } from './pagina-upload.component';

const routes: Routes = [
  {
    path: '', component: PaginaUploadComponent, canActivate: [canActivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
