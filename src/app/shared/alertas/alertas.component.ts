import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.css'
})
export class AlertasComponent {

  @Input() message: string = 'Deu ruim!'
  @Input() type: string = 'info'

  constructor(public bsModalRef: BsModalRef) {}

  onClose(){
    this.bsModalRef.hide()
  }
}
