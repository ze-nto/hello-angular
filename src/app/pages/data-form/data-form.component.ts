import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from '../../servicos/estados.service';
import { Cargo } from '../../shared/models/Cargo';
import { Estado } from '../../shared/models/Estado';
import { ConsultaCepService } from './../../servicos/consulta-cep.service';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls:['./data-form.component.css']
})
export class DataFormComponent {

  formulario!: FormGroup;
  submitted: boolean = false;
  estados: Estado[] = [];
  cargos: Cargo[] = [];
  tecnologias: any[] = []
  newsletterOp: any = {};
  frameworks: any[] = ['Angular', 'React', 'Vue', 'Next']

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private estadosService: EstadosService,
    private consultaCepService: ConsultaCepService){}

  ngOnInit(){
    // this.estados = this.estadosService.getEstados()
    this.estadosService.getEstados().subscribe(response => {
      for(let estado of response){
        this.estados.push(estado)
      }
    })

    this.cargos = this.estadosService.getCargos()
    this.tecnologias = this.estadosService.getTecnologias()
    this.newsletterOp = this.estadosService.getNewsletter()

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],
      cargo: [null],
      tecnologia: [null],
      newsletter: [null],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null], 
        rua: [null, [Validators.required]], 
        bairro: [null, [Validators.required]], 
        cidade: [null, [Validators.required]], 
        estado: [null, [Validators.required]],
      })
    })

  }

  get frameworksArray () {
    return this.formulario.get('frameworks') as FormArray
  }

  buildFrameworks(){
    const values = this.frameworks.map( item => new FormControl(false))
    return this.formBuilder.array(values);
  }
  
  onSubmit(){
    if(this.formulario.valid){

      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(response => {
          this.submitted = true;
          this.formulario.reset()
        });   
      }else{
        this.verificaValidacoes(this.formulario)
        console.log('formulario invalido')
      }
  }

  verificaValidacoes(grupo: FormGroup){
    Object.keys(grupo.controls).forEach(campo => {
      const controle = grupo.get(campo)
      controle?.markAsDirty();
      if(controle instanceof FormGroup){
        this.verificaValidacoes(controle)
      }
    })
  }

  verificaValidTouched(campo: string){
    if(campo == 'nome' || campo == 'email' || 'cargo' || 'termos'){
      return !this.formulario.get(campo)?.valid && (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty);
    }
    const campoForm = this.formulario.get(`endereco.${campo}`) 
    // console.log(campoForm?.dirty)
    return !campoForm?.valid && (campoForm?.touched || campoForm?.dirty);
  }

  aplicaCssErro(campo: any){
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    }
  }


  consultaCEP(){
    let cep = this.formulario.get('endereco.cep')?.value;
    
    if(cep != null && cep !== ''){
      this.consultaCepService.consultaCEP(cep)?.subscribe(
          response => {
            this.populaDados(response)
          }
        )
      }
    } 
  

  populaDados(dados: any){
    
    this.formulario.patchValue({
      "endereco": {
        "rua": dados.logradouro,
        "cidade": dados.localidade,
        "bairro": dados.bairro,
        "complemento": dados.complemento,
        "estado": dados.uf
      }

    })
  }
  
  resetaFormulario() {
    this.formulario.patchValue({
      "endereco": {
        "rua": null,
        "cidade": null,
        "bairro": null,
        "complemento": null,
        "estado": null
      }

    })
  }

  setarCargo(){
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev: Pleno' }

    this.formulario.get('cargo')?.setValue(cargo)
  }

  compararCargos(obj1: Cargo, obj2: Cargo){
    return obj1 && obj2? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 ===  obj2;
  }


  ngOnChanges(changes: SimpleChanges){
    const name = changes['nome'];
   
  }
}
