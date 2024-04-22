import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.scss'
})
export class InputPropertyComponent {

  @Input() nomeCurso: string = '';
  @Input('CH') cargaHoraria: number = 0;

}
