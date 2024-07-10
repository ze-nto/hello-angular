import { Component, EnvironmentInjector, ViewChild, assertInInjectionContext, inject, runInInjectionContext } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { APP_CONFIG } from './../../app.module';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  texto: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  private environmentInjector = inject(EnvironmentInjector);
  constructor(){
     
    }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(assertInInjectionContext(this.excluir))
  }

  excluir(elementReceived: PeriodicElement){
    runInInjectionContext(this.environmentInjector, () => {
      let ok = inject(APP_CONFIG) 
      console.log(ok)
    })
    console.log(this.dataSource.data.length)
    this.dataSource.data = this.dataSource.data.filter(element => element.symbol != elementReceived.symbol)
    console.log(this.dataSource.data.length)
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 255265545, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 245265545, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 275265545, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4025265545, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5025265545, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6025265545, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7025265545, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8025265545, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9025265545, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10025265545, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11025265545, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

