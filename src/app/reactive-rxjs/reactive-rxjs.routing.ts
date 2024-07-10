import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveRxjsComponent } from './components/reactive-rxjs-main/reactive-rxjs.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeRegisterComponent } from './components/recipe-register/recipe-register.component';

const routes: Routes = [
  {  path: '', redirectTo: 'listar', pathMatch: 'full'},
  {  path: '', component: ReactiveRxjsComponent, children: [
    {  path: 'listar', component: RecipeListComponent },
    {  path: 'cadastrar', component: RecipeRegisterComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRxjsRoutingModule { }

