import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {
 
  constructor(){
    console.log('Chamada')
  }

  getCursos(){
    return ['Angular', 'Java', 'Spring Boot']
  }
}