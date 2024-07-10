import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-register',
  templateUrl: './recipe-register.component.html',
  styleUrls: ['./recipe-register.component.css']
})
export class RecipeRegisterComponent implements OnInit {


  formulario2 = new FormGroup({
    nome: new FormControl('Valor inicial'),
    categoria: new FormControl('Categoria inicial'),
    metadados: new FormGroup({
      imageUrl: new FormControl(''),
      palavrasChave: new FormControl(''),
      tempoDePreparo: new FormControl(''),
      avaliacao: new FormControl<number | null>(null),
    }),
  })

  formulario = this.formBuilder.group({
    nome: ['Valor inicial'],
    categoria: ['Categoria inicial'],
    metadados: this.formBuilder.group({
      imageUrl: [''],
      palavrasChave: this.formBuilder.array([]),
      tempoDePreparo: [''],
      avaliacao: [0],
    }),
  })

  palavras: FormArray = this.formulario.controls.metadados.controls.palavrasChave
  categoria$: Observable<any> = this.formulario.controls.categoria.valueChanges;
  palavras$ = this.formulario.controls.metadados.controls.palavrasChave.valueChanges
  arrayPalavras$: Set<Observable<any>> = new Set()

  adicionaPalavra(){
    this.palavras.push(this.formBuilder.control('ok'))
    console.log(this.palavras.length)
    console.log(this.palavras.at(1))
    this.palavras$.subscribe(value => console.log(value))
    this.palavras.controls.forEach(value => {
     this.arrayPalavras$.add(value?.valueChanges)
    })
  }

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario.valueChanges.subscribe((value: Object) => {
      for (const chave in value) {
        if (value.hasOwnProperty(chave)) {
          if(chave == 'metadados'){
            let metadados = value[chave as keyof Object]
            for (const chave2 in metadados){
              if (metadados.hasOwnProperty(chave2)){
                console.log(`${chave2}: ${metadados[chave2 as keyof Object]}`);
              }
            }
            
          }
          console.log(`${chave}: ${value[chave as keyof Object]}`);
        }  
      }
    })
      

  }

  updateNome(){
    this.formulario.controls.nome.setValue('Mandioca frita')
    
  }

  onSubmit(){
    console.log(this.formulario.value)
  }

  updateRecipe(){
    this.formulario.patchValue({
      nome: 'Macarrão Bolonhesa',
      metadados: {
        avaliacao: 3
      }
    })
  }

  setPalavra(event: any, i:number){
    this.palavras.controls[i].setValue(event.target.value)
  }


}
