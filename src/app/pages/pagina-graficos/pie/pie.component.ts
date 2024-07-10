import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class PieComponent implements OnInit {

  @ViewChild('svgContainer', {static: true}) svg!: ElementRef;

  constructor() { }

  ngOnInit() {
    const margin = {top: 20, rigth: 20, bottom: 30, left: 40}

  }

}
