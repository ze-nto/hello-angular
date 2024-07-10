import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})

export class CicloComponent implements OnInit, DoCheck, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked{

  valorInicial: number = 10;
  @Input() valor: number = 0
  
  constructor(){
    console.log('Construtor')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  
  ngOnInit(): void { 
    console.log('ngOnInit');
  }

 
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    for(let item in changes){
      console.log('Mudou');
      console.log(changes[item].currentValue)
    }
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
}
