import { TestBed } from '@angular/core/testing';

import { HttpGetProductsService } from './http-get-products.service';

describe('HttpGetProductsService', () => {
  let service: HttpGetProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
