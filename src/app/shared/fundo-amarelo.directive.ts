import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

   @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
  this.backgroundColor = 'yellow';
  this.cursor = 'default';
  }
  
   @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.cursor') cursor: string = '';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow')
   }

}
