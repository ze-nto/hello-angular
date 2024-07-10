import { HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalAlertService } from './../../shared/modal-alert.service';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-pagina-upload',
  templateUrl: './pagina-upload.component.html',
  styleUrl: './pagina-upload.component.css'
})
export class PaginaUploadComponent {

  nomes: string[] = []
  arquivosSelecionados: Set<File> = new Set<File>()
  subs: Subscription = new Subscription()
  porcentagem: number = 0;

  constructor(private alertService: ModalAlertService, private uploadService: UploadService){

  }

  onChange(event: any){
      this.arquivosSelecionados = new Set<File>();
      this.nomes = []
      const selectedFiles = <FileList>event.target.files
      const input = document.getElementById('custom')    
      const fileNames: string[] = []

      for (let index = 0; index < selectedFiles.length; index++) {
        fileNames.push(selectedFiles[index].name);
        this.arquivosSelecionados.add(selectedFiles[index])
      }
      if(input){
        input.innerHTML = fileNames.join(', ');
      }
      this.nomes = fileNames
      this.porcentagem = 0
  } 

  onUpload(){
    if(this.arquivosSelecionados && this.arquivosSelecionados.size > 0){

      this.subs = this.uploadService.upload(this.arquivosSelecionados, '/api/upload').subscribe({
        next: (event: any) => {
          if(event.type == HttpEventType.UploadProgress){
            const percentangem = Math.round((event.loaded * 100) /event.total)
            this.porcentagem = percentangem
          }
          if(event.type == HttpEventType.Response){
            console.log('upload concluído')
          }
          },
          complete: () => console.log('ok') 
        }
      )
    }
    
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }
}