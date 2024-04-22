import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-pipes',
  templateUrl: './ex-pipes.component.html',
  styleUrls: ['./ex-pipes.component.css']
})
export class ExPipesComponent {

livro: any = {
  titulo: 'Learning Javascript',
  rating: 4.5326,
  numeroPaginas: 314,
  preco: 44.99,
  dataLancamento: new Date(2016, 5 , 23),
  url: 'http://amazon.com.br' 
}

livros: string[] = [ 'Java', 'Angular 2', 'Mastering Docker'];
filtro: string = '';

valorAsync: Promise<string> = new Promise<string>((resolve, reject) => {
  setTimeout(() => { resolve("Valor assincrono")}, 2000)
} )

// valorAssincrono = interval(1000).pipe(map(valor => 'Valor assincrono 2'))


addCursos(valor: string){
  this.livros.push(valor);
  console.log(this.livros)
}

obterCursos(){
  if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') return this.livros;
  else{
    return this.livros.filter( v => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false
  });

  }
}

}
