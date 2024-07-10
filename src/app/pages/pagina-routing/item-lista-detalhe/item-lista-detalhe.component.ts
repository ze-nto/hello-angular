import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListaService } from './../../../servicos/lista.service';

@Component({
  selector: 'app-item-lista-detalhe',
  templateUrl: './item-lista-detalhe.component.html',
  styleUrl: './item-lista-detalhe.component.scss'
})
export class ItemListaDetalheComponent {


  itemId: number = 0;
  inscricao: Subscription = new Subscription();
  item: any;
  exibir: boolean = true;
 
  constructor( private route: ActivatedRoute, private listaService: ListaService, private router: Router){
    // this.itemId = this.route.snapshot.params['id'];
  }

  ngOnInit(){
     this.route.params.subscribe((params: any) => {
      this.itemId = Number(params['id']);
      if(!Number.isNaN(this.itemId)){
        this.listaService.getItem(this.itemId)
        .subscribe( item => { this.item = item })
        this.exibir = !(this.item?.categoria == 'hortifruti' || this.item?.categoria == 'açougue')
      }else{
        this.router.navigate(['1'], {
          relativeTo: this.route
        })
      }

    });
  }

  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }
}
