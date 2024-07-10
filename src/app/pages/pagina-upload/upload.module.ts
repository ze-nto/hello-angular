import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginaUploadComponent } from './pagina-upload.component';

import { UploadRoutingModule } from './upload-routing.module';


@NgModule({
  declarations: [
    PaginaUploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule
  ],
  exports: [PaginaUploadComponent]
})
export class UploadModule { }
