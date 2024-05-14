import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  @Input() nome: string | null = '';
  @Input() valor: string | null = '';
  @Input() estilo: string | null = '';

}
