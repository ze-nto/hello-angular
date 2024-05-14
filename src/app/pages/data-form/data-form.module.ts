import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateFormModule } from '../template-form/template-form.module';
import { DataFormComponent } from './data-form.component';



@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TemplateFormModule,
  ],
  providers: []
})
export class DataFormModule { }
