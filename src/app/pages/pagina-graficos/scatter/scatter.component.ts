import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent implements OnInit {

  constructor(element: ElementRef) { 
    console.log(element.nativeElement);
    console.log(element.nativeElement)
   }

  ngOnInit() {}

}
