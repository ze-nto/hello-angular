import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CicloComponent } from './components/ciclo/ciclo.component';
import { CriarDisciplinaComponent } from './components/criar-disciplina/criar-disciplina.component';
import { CursosModule } from './components/cursos/cursos.module';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { InputPropertyComponent } from './components/input-property/input-property.component';

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExPipesComponent } from './components/ex-pipes/ex-pipes.component';
import { FiltroArrayPipe } from './components/ex-pipes/pipes/filtro-array.pipe';
import { FiltroImpuroPipe } from './components/ex-pipes/pipes/filtro-impuro.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AccountComponent } from './pages/account/account.component';
import { DadosComponent } from './pages/dados/dados.component';
import { DataFormModule } from './pages/data-form/data-form.module';
import { LoginComponent } from './pages/login/login.component';
import { PaginaPipesComponent } from './pages/pagina-pipes/pagina-pipes.component';
import { ItemListaDetalheComponent } from './pages/pagina-routing/item-lista-detalhe/item-lista-detalhe.component';
import { ItemNaoEncontradoComponent } from './pages/pagina-routing/item-nao-encontrado/item-nao-encontrado.component';
import { PaginaRoutingComponent } from './pages/pagina-routing/pagina-routing.component';
import { PaginaServicosComponent } from './pages/pagina-servicos/pagina-servicos.component';
import { TemplateFormModule } from './pages/template-form/template-form.module';
import { CursosService } from './servicos/cursos.service';
import { ListaService } from './servicos/lista.service';
import { UsuarioService } from './servicos/usuario.service';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
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
    LoginComponent,
    PaginaPipesComponent,
    AccountComponent,
    DadosComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
    TemplateFormModule,
    AppRoutingModule,
    DataFormModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  exports: [
    // ContadorComponent
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ListaService,
    UsuarioService,
    CursosService, 
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR' 
    }, provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]})
export class AppModule { }
