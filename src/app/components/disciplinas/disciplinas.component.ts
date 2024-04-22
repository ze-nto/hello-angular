import { Component } from '@angular/core';
import { CursosService } from '../../servicos/cursos.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent {


  cursos: string[] = []
  // cursosService: CursosService;

  constructor(private cursosService: CursosService){
    this.cursosService = cursosService;
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }

}
