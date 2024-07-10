import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarComponent } from './pages/pagina-graficos/bar/bar.component';
import { PaginaGraficosComponent } from './pages/pagina-graficos/pagina-graficos.component';
import { PieComponent } from './pages/pagina-graficos/pie/pie.component';
import { ScatterComponent } from './pages/pagina-graficos/scatter/scatter.component';
import { FavoritesComponent } from './pages/pagina-products/favorites/favorites.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CicloComponent } from './components/ciclo/ciclo.component';
import { CriarDisciplinaComponent } from './components/criar-disciplina/criar-disciplina.component';
import { CursosModule } from './components/cursos/cursos.module';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { InputPropertyComponent } from './components/input-property/input-property.component';

import { provideHttpClient } from '@angular/common/http';
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

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { CopyrightDirective } from './diretivas/copyright.directive';
import { NumericDirective } from './diretivas/numeric.directive';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './pages/pagina-products/product-detail/product-detail.component';
import { ProductListComponent } from './pages/pagina-products/product-list/product-list.component';
import { UploadModule } from './pages/pagina-upload/upload.module';
import { CursosService } from './servicos/cursos.service';
import { ListaService } from './servicos/lista.service';
import { UsuarioService } from './servicos/usuario.service';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt);
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config description');
export const MY_APP_CONFIG_VARIABLE = "ISSO AÍ"
export interface AppConfig {
  texto: string
}

@NgModule({
  declarations: [
    FundoAmareloDirective,
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
    HomeComponent,
    PaginaGraficosComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    ProductListComponent,
    ProductDetailComponent,
    FavoritesComponent,
    CopyrightDirective,
    NumericDirective
  ],
  imports: [
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    CursosModule,
    FormsModule,
    TemplateFormModule,
    AppRoutingModule,
    DataFormModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    SharedModule, 
    UploadModule,
    ReactiveFormsModule,
    BaseChartDirective,
    MatSidenavModule
   
  ],
  exports: [
    // ContadorComponent
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    ListaService,
    UsuarioService,
    CursosService, 
    provideAnimationsAsync(),
    { provide: LOCALE_ID,  useValue: 'pt-BR' }, 
    { provide: APP_CONFIG, useValue: 'OK' }, 
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]})
export class AppModule { }

