import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CicloComponent } from './components/ciclo/ciclo.component';
import { CriarDisciplinaComponent } from './components/criar-disciplina/criar-disciplina.component';
import { CursosModule } from './components/cursos/cursos.module';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { InputPropertyComponent } from './components/input-property/input-property.component';

import { ExPipesComponent } from './components/ex-pipes/ex-pipes.component';
import { FiltroArrayPipe } from './components/ex-pipes/pipes/filtro-array.pipe';
import { FiltroImpuroPipe } from './components/ex-pipes/pipes/filtro-impuro.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DataFormComponent } from './pages/data-form/data-form.component';
import { DiretivasModule } from './pages/pagina-diretivas/diretivas.module';
import { ItemListaDetalheComponent } from './pages/pagina-routing/item-lista-detalhe/item-lista-detalhe.component';
import { PaginaRoutingComponent } from './pages/pagina-routing/pagina-routing.component';
import { PaginaServicosComponent } from './pages/pagina-servicos/pagina-servicos.component';
import { TemplateFormModule } from './pages/template-form/template-form.module';
import { CursosService } from './servicos/cursos.service';
import { ListaService } from './servicos/lista.service';
import { ItemNaoEncontradoComponent } from './pages/pagina-routing/item-nao-encontrado/item-nao-encontrado.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    InputPropertyComponent,
    CicloComponent,
    ExPipesComponent,
    FiltroArrayPipe,
    FiltroImpuroPipe,
    DisciplinasComponent,
    CriarDisciplinaComponent,
    PaginaServicosComponent,
    PaginaRoutingComponent,
    ItemListaDetalheComponent,
    PageNotFoundComponent,
    ItemNaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    DiretivasModule,
    CursosModule,
    FormsModule,
    TemplateFormModule,
    AppRoutingModule,
  ],
  exports: [
    // ContadorComponent
  ],
  providers: [
    provideClientHydration(),
    ListaService,
    CursosService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR' 
    }
  ],
  bootstrap: [AppComponent]})
export class AppModule { }
