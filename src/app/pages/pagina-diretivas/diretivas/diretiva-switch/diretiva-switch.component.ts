import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-switch',
  templateUrl: './diretiva-switch.component.html',
  styleUrl: './diretiva-switch.component.scss'
})
export class DiretivaSwitchComponent {
  selected?: string;
  states: string[] = [ 'Banana', 'Maçã', 'Uva' ];
  isAnimated: boolean = false;
}
