import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ReactiveRxjsComponent } from './components/reactive-rxjs-main/reactive-rxjs.component';
import { RecipeFilterComponent } from './components/recipe-filter/recipe-filter.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeRegisterComponent } from './components/recipe-register/recipe-register.component';
import { ReactiveRxjsRoutingModule } from './reactive-rxjs.routing';

@NgModule({
  declarations: [
    ReactiveRxjsComponent,     
    RecipeListComponent,
    RecipeRegisterComponent,
    RecipeFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveRxjsRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[],
})
export class ReactiveRxjsModule { }

