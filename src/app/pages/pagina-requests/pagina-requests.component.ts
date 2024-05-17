import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { ModalAlertService } from './../../shared/modal-alert.service';
import { Curso } from './curso';
import { Cursos2Service } from './services/cursos2.service';

@Component({
  selector: 'app-pagina-requests',
  templateUrl: './pagina-requests.component.html',
  styleUrl: './pagina-requests.component.css'
})
export class PaginaRequestsComponent implements OnInit {

  @ViewChild('deleteModal') deleteModal!: TemplateRef<any>; 

  cursos$: Observable<Curso[]> = new Observable();
  error$: Subject<boolean> = new Subject();
  valor: boolean = false;
  deleteModalRef!: BsModalRef;
  cursoSelecionado: Curso = { id: '', nome:'' } as Curso;

  constructor(
    private cursosService: Cursos2Service,
    private modalAlertService: ModalAlertService,
    private bsModalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute
  ){}

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
    this.modalAlertService.showAlertDanger('Erro ao concetar com o servidor');
  }

  onEdit(id: string | null){
    this.router.navigate(['editar', id], {
      relativeTo: this.route
    })
  }

  onDelete(curso: Curso){
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.bsModalService.show(this.deleteModal, { class: 'modal-sm'});
  }

  onDecline(){
    this.bsModalService.hide()
  }

  onConfirm(){
    this.cursosService.remove(this.cursoSelecionado).subscribe({
      next: () => {
        this.onRefresh()
        this.bsModalService.hide()
      },
      error: (error) => {
        this.modalAlertService.showAlertDanger('Erro ao tentar deletar o curso')
        this.bsModalService.hide()
      }
    })
    
  }


}
