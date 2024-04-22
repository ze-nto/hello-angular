import { Injectable } from '@angular/core';
import { ItemCompra } from '../pages/pagina-routing/pagina-routing.component';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  lista: ItemCompra[] = listaDeCompras;

  constructor() { }

  getLista(){
    return this.lista;
  }

  getItem(id: number){
    return this.lista.find( item => item.id == id)
  }
}

const listaDeCompras = [
  { id: 1, nome: 'Banana', categoria: 'hortifruti', quantidade: '1.5', marca: 'Marca A', preco: 4.99, validade: '2024-04-25' },
  { id: 2, nome: 'Carne bovina', categoria: 'açougue', quantidade: '1.0', marca: 'Marca B', preco: 14.99, validade: '2024-04-28' },
  { id: 3, nome: 'Queijo', categoria: 'laticínios', quantidade: 3, marca: 'Marca C', preco: 6.49, validade: '2024-04-22' },
  { id: 4, nome: 'Pão francês', categoria: 'padaria', quantidade: 5, marca: 'Marca D', preco: 7.99, validade: '2024-04-20' },
  { id: 5, nome: 'Refrigerante', categoria: 'bebidas', quantidade: 12, marca: 'Marca E', preco: 9.99, validade: null },
  { id: 6, nome: 'Azeitona', categoria: 'conservas', quantidade: 4, marca: 'Marca F', preco: 6.29, validade: '2025-01-15' },
  { id: 7, nome: 'Detergente', categoria: 'limpeza', quantidade: 6, marca: 'Marca G', preco: 4.99, validade: null },
  { id: 8, nome: 'Sabonete', categoria: 'higiene', quantidade: 3, marca: 'Marca H', preco: 7.49, validade: null },
  { id: 9, nome: 'Maçã', categoria: 'hortifruti', quantidade: '2.0', marca: 'Marca I', preco: 5.49, validade: '2024-05-01' },
  { id: 10, nome: 'Frango', categoria: 'açougue', quantidade: '0.75', marca: 'Marca J', preco: 13.99, validade: '2024-04-25' },
  { id: 11, nome: 'Leite', categoria: 'laticínios', quantidade: 2, marca: 'Marca K', preco: 4.49, validade: '2024-04-30' },
  { id: 12, nome: 'Baguete', categoria: 'padaria', quantidade: 6, marca: 'Marca L', preco: 8.49, validade: '2024-04-23' },
  { id: 13, nome: 'Suco de laranja', categoria: 'bebidas', quantidade: 10, marca: 'Marca M', preco: 11.99, validade: null },
  { id: 14, nome: 'Atum enlatado', categoria: 'conservas', quantidade: 5, marca: 'Marca N', preco: 7.29, validade: '2025-02-20' },
  { id: 15, nome: 'Água sanitária', categoria: 'limpeza', quantidade: 4, marca: 'Marca O', preco: 5.99, validade: null },
  { id: 16, nome: 'Creme dental', categoria: 'higiene', quantidade: 2, marca: 'Marca P', preco: 8.99, validade: null },
  { id: 17, nome: 'Morango', categoria: 'hortifruti', quantidade: '1.25', marca: 'Marca Q', preco: 3.99, validade: '2024-04-27' },
  { id: 18, nome: 'Costela de porco', categoria: 'açougue', quantidade: '1.5', marca: 'Marca R', preco: 12.99, validade: '2024-04-22' },
  { id: 19, nome: 'Iogurte', categoria: 'laticínios', quantidade: 4, marca: 'Marca S', preco: 5.99, validade: '2024-04-26' },
  { id: 20, nome: 'Croissant', categoria: 'padaria', quantidade: 4, marca: 'Marca T', preco: 6.99, validade: '2024-04-24' },
  { id: 21, nome: 'Cerveja', categoria: 'bebidas', quantidade: 8, marca: 'Marca U', preco: 10.99, validade: null },
  { id: 22, nome: 'Palmito', categoria: 'conservas', quantidade: 3, marca: 'Marca V', preco: 5.99, validade: '2025-01-10' },
  { id: 23, nome: 'Amaciante de roupas', categoria: 'limpeza', quantidade: 5, marca: 'Marca W', preco: 3.99, validade: null },
  { id: 24, nome: 'Shampoo', categoria: 'higiene', quantidade: 3, marca: 'Marca X', preco: 6.99, validade: null },
  { id: 25, nome: 'Abacaxi', categoria: 'hortifruti', quantidade: '2.5', marca: 'Marca Y', preco: 7.99, validade: '2024-04-28' },
  { id: 26, nome: 'Salsicha', categoria: 'açougue', quantidade: '0.8', marca: 'Marca Z', preco: 14.99, validade: '2024-04-30' },
  { id: 27, nome: 'Manteiga', categoria: 'laticínios', quantidade: 5, marca: 'Marca AA', preco: 5.49, validade: '2024-04-29' },
  { id: 28, nome: 'Brioche', categoria: 'padaria', quantidade: 7, marca: 'Marca AB', preco: 6.99, validade: '2024-04-26' },
  { id: 29, nome: 'Energético', categoria: 'bebidas', quantidade: 9, marca: 'Marca AC', preco: 9.99, validade: null },
  { id: 30, nome: 'Molho de tomate', categoria: 'conservas', quantidade: 3, marca: 'Marca AD', preco: 6.29, validade: '2025-02-15' },
  { id: 31, nome: 'Sabão em pó', categoria: 'limpeza', quantidade: 7, marca: 'Marca AE', preco: 3.99, validade: null },
  { id: 32, nome: 'Desodorante', categoria: 'higiene', quantidade: 4, marca: 'Marca AF', preco: 7.49, validade: null },
  { id: 33, nome: 'Pêssego', categoria: 'hortifruti', quantidade: '1.8', marca: 'Marca AG', preco: 5.99, validade: '2024-05-05' },
  { id: 34, nome: 'Coxa de frango', categoria: 'açougue', quantidade: '1.2', marca: 'Marca AH', preco: 13.99, validade: '2024-04-27' },
  { id: 35, nome: 'Requeijão', categoria: 'laticínios', quantidade: 3, marca: 'Marca AI', preco: 6.49, validade: '2024-04-23' },
  { id: 36, nome: 'Pão de forma', categoria: 'padaria', quantidade: 6, marca: 'Marca AJ', preco: 7.99, validade: '2024-04-21' },
  { id: 37, nome: 'Vinho tinto', categoria: 'bebidas', quantidade: 7, marca: 'Marca AK', preco: 12.99, validade: null },
  { id: 38, nome: 'Pepino em conserva', categoria: 'conservas', quantidade: 5, marca: 'Marca AL', preco: 6.99, validade: '2025-01-30' },
  { id: 39, nome: 'Limpador multiuso', categoria: 'limpeza', quantidade: 3, marca: 'Marca AM', preco: 4.49, validade: null },
  { id: 40, nome: 'Loção hidratante', categoria: 'higiene', quantidade: 2, marca: 'Marca AN', preco: 8.99, validade: null },
  { id: 41, nome: 'Cebola', categoria: 'hortifruti', quantidade: '1.5', marca: 'Marca AO', preco: 3.49, validade: '2024-04-30' },
  { id: 42, nome: 'Linguiça', categoria: 'açougue', quantidade: '0.7', marca: 'Marca AP', preco: 12.99, validade: '2024-04-25' },
  { id: 43, nome: 'Iogurte grego', categoria: 'laticínios', quantidade: 4, marca: 'Marca AQ', preco: 6.49, validade: '2024-04-28' },
  { id: 44, nome: 'Baguete integral', categoria: 'padaria', quantidade: 5, marca: 'Marca AR', preco: 6.99, validade: '2024-04-24' },
  { id: 45, nome: 'Chá verde', categoria: 'bebidas', quantidade: 10, marca: 'Marca AS', preco: 8.99, validade: null },
  { id: 46, nome: 'Sardinha enlatada', categoria: 'conservas', quantidade: 3, marca: 'Marca AT', preco: 5.99, validade: '2025-01-10' },
  { id: 47, nome: 'Desinfetante', categoria: 'limpeza', quantidade: 4, marca: 'Marca AU', preco: 3.99, validade: null },
  { id: 48, nome: 'Toalhas de papel', categoria: 'higiene', quantidade: 3, marca: 'Marca AV', preco: 4.99, validade: null },
  { id: 49, nome: 'Pêssego em calda', categoria: 'conservas', quantidade: 4, marca: 'Marca AW', preco: 6.99, validade: '2025-02-01' },
  { id: 50, nome: 'Frango inteiro', categoria: 'açougue', quantidade: '2.0', marca: 'Marca AX', preco: 15.99, validade: '2024-05-05' }
];
