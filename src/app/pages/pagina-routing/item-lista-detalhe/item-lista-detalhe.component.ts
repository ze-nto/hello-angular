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


  itemId: string = '';
  inscricao: Subscription = new Subscription();
  item: any;
  exibir: boolean = true;
 
  constructor( private route: ActivatedRoute, private listaService: ListaService, private router: Router){
    // this.itemId = this.route.snapshot.params['id'];
  }

  ngOnInit(){
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.itemId = params['id'];
      this.item = this.listaService.getItem(Number(this.itemId))
      this.exibir = !(this.item?.categoria == 'hortifruti' || this.item?.categoria == 'açougue')
      // if(this.item == null){
      //   this.router.navigate(['nao-encontrado'])
      // }
    });
  }

  ngOnDestroy(){
    this.inscricao?.unsubscribe();
  }
}
