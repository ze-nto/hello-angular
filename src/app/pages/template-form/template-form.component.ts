import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

type Endereco = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls:['./template-form.component.css']
})
export class TemplateFormComponent implements OnChanges {

  usuario: any = {
    nome: null,
    email: null,
  }

  @Input() nome: string = ''

  constructor(private http: HttpClient){

  }

  consultaCEP(cep: string, formulario: NgForm){
    cep = cep.replace(/\D/g, '');
    if(cep != ''){
      let validaCep = /^[0-9]{8}$/;

      if(validaCep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(
          response => {
            this.populaDados(response, formulario)
          }
        )
      }
    } 
  }

  populaDados(dados: Endereco | any, formulario: NgForm){
    // formulario.setValue({
    //   "nome": formulario.value.nome,
    //   "email": formulario.value.email,
    //   "endereco": {
    //     "rua": dados.logradouro,
    //     "CEP": dados.cep,
    //     "cidade": dados.localidade,
    //     "bairro": dados.bairro,
    //     "complemento": dados.complemento,
    //     "estado": dados.uf,
    //     "numero": ''
    //   }
    // });

    formulario.form.patchValue({
      "endereco": {
        "rua": dados.logradouro,
        "cidade": dados.localidade,
        "bairro": dados.bairro,
        "complemento": dados.complemento,
        "estado": dados.uf
      }

    })
  }
  
  resetaFormulario(formulario: NgForm) {
    formulario.form.patchValue({
      "endereco": {
        "rua": null,
        "cidade": null,
        "bairro": null,
        "complemento": null,
        "estado": null
      }

    })
  }
  
  onSubmit(formulario: NgForm){
    formulario.form.reset()
  }

  ngOnChanges(changes: SimpleChanges){
    const name = changes['nome'];
  }
}
