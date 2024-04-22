import { Component, OnInit } from '@angular/core';
import { CursosService } from './../../servicos/cursos.service';

@Component({
  selector: 'app-criar-disciplina',
  templateUrl: './criar-disciplina.component.html',
  styleUrl: './criar-disciplina.component.scss'
})
export class CriarDisciplinaComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService){}
  
  ngOnInit(){
    this.cursos = this.cursosService.getCursos()
  }

}
