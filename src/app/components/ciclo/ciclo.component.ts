import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})

export class CicloComponent implements OnInit, DoCheck, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewChecked{

  valorInicial: number = 10;
  
  constructor(){
    console.log('Construtor')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  
  ngOnInit(): void { 
    console.log('ngOnInit');
  }
  
  ngOnChanges(): void {
    console.log('ngOnChanges');
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
