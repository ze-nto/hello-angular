/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductViewService } from './product-view.service';

describe('Service: ProductView', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductViewService]
    });
  });

  it('should ...', inject([ProductViewService], (service: ProductViewService) => {
    expect(service).toBeTruthy();
  }));
});
