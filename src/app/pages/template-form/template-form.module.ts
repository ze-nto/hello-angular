import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../../components/form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateFormModule { }
