import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ContadorComponent } from '../../components/contador/contador.component';
import { ContentComponent } from '../../components/content/content.component';
import { FundoAmareloDirective } from '../../shared/fundo-amarelo.directive';
import { DiretivasRoutingModule } from './diretivas-routing.module';
import { DiretivaClassComponent } from './diretivas/diretiva-class/diretiva-class.component';
import { DiretivaContentComponent } from './diretivas/diretiva-content/diretiva-content.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaStyleComponent } from './diretivas/diretiva-style/diretiva-style.component';
import { DiretivaSwitchComponent } from './diretivas/diretiva-switch/diretiva-switch.component';
import { DiretivasCustomizadasComponent } from './diretivas/diretivas-customizadas/diretivas-customizadas.component';
import { PaginaDiretivasComponent } from './pagina-diretivas.component';


@NgModule({
  declarations: [
    DiretivaClassComponent,
    DiretivaContentComponent,
    DiretivaForComponent,
    DiretivaIfComponent,
    DiretivaStyleComponent,
    DiretivaSwitchComponent ,
    DiretivasCustomizadasComponent,
    PaginaDiretivasComponent,
    ContadorComponent,
    ContentComponent,
    FundoAmareloDirective
  ],
  exports: [
    PaginaDiretivasComponent,
    DiretivasCustomizadasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DiretivasRoutingModule, 
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
   
  ],
  providers: []
})
export class DiretivasModule { }
