import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Injectable()
export class ProductViewService {

  private product: Product | undefined;

  constructor(private productService: ProductsService) { }

  getProduct(id: number): Observable<Product> {
    return this.productService.getProducts().pipe(
      switchMap(products => {
        if (!this.product) {
          this.product = products[id];
        }
        return of(this.product);
      })
    );
  }

}