import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products = [
    {
      name: 'Webcam',
      price: 100,
      keywords: []
    },
    {
      name:  'Microphone',
      price: 200,
      keywords: []
    },
    {
      name: 'Wireless keyboard',
      price: 85,
      keywords: []
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

}