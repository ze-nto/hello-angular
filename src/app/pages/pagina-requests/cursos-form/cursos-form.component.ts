import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CursosService } from "../services/cursos.service";
import { ModalAlertService } from "./../../../shared/modal-alert.service";

@Component({
  selector: "app-cursos-form",
  templateUrl: "./cursos-form.component.html",
  styleUrl: "./cursos-form.component.css",
})
export class CursosFormComponent implements OnInit {
  formulario: FormGroup = {} as FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CursosService,
    private modal: ModalAlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const curso = this.route.snapshot.data['curso'];
    this.formulario = this.formBuilder.group({
      id: [curso.id],
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });

    // this.route.params.pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadById(id))
    //   ).subscribe( curso => this.updateForm(curso));
      
    }
  

  onSubmit() {
    this.isSubmitted = true;
    if (this.formulario.valid) {

      let msgSuccess = "Curso criado com sucesso."
      let msgErro = "Erro ao tentar criar curso."

      if (this.formulario.value.id ){
        msgSuccess = "Curso atualizado com sucesso!"
        msgErro = "Erro ao tentar atualizar curso."
      }else{
        this.formulario.removeControl('id')
      }

      this.service.save(this.formulario.value).subscribe({
        next: () => {
          this.modal.showAlertSuccess(msgSuccess);
            setTimeout(() => {
              this.router.navigate(["requests"]);
            }, 2000);
        },
        error: () => { this.modal.showAlertDanger(msgErro) }
      })
      
    }
  }
  

  onCancel() {
    this.isSubmitted = false;
    this.formulario.reset();
    this.router.navigate(["requests"]);
  }

  hasError(campo: string) {
    return this.formulario.get(campo)?.errors;
  }

  // updateForm(curso: Curso) {
  //   this.formulario.patchValue({
  //     id: curso.id,
  //     nome: curso.nome,
  //   });
  // }
}
