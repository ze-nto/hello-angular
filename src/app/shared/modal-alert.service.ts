import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from './alertas/alertas.component';

export enum AlertType{
  DANGER = 'danger',
  SUCCESS = 'success'

}

@Injectable({
  providedIn: 'root'
})
export class ModalAlertService {

  constructor(private modalService: BsModalService) { }

  private showAlert(msg: string, type: AlertType){
    const modalRef: BsModalRef = this.modalService.show(AlertasComponent);
    modalRef.content.type = type
    modalRef.content.message = msg
    modalRef.content.closeBtnName = 'Close';
  }

  showAlertDanger(msg: string){
    this.showAlert(msg, AlertType.DANGER);
  }

  showAlertSuccess(msg: string){
    this.showAlert(msg, AlertType.SUCCESS);
  }



}
