import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { ModalAlertService } from './../../shared/modal-alert.service';
import { Curso } from './curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-pagina-requests',
  templateUrl: './pagina-requests.component.html',
  styleUrl: './pagina-requests.component.css'
})
export class PaginaRequestsComponent implements OnInit {

  // cursos: Curso[] = [];
 
  cursos$: Observable<Curso[]> = new Observable();
  error$: Subject<boolean> = new Subject();

  constructor(
    private cursosService: CursosService,
    private modalAlertService: ModalAlertService  ){}

  ngOnInit(){
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.cursosService.list()
    .pipe(
      catchError(error => {
        this.openModal()
        return EMPTY
      })
    )
  }

  openModal() {
    this.modalAlertService.showAlertDanger('Erro ao concetar com o servidor')
  }


}
