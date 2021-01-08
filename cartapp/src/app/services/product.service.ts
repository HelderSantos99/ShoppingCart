import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product (1, 'Product 1', 'Iphone XR v1', 100),
    new Product (2, 'Product 2', 'Iphone XR v2', 200),
    new Product (3, 'Product 3', 'Iphone XR v3', 300),
    new Product (4, 'Product 4', 'Iphone XR v4', 400),
    new Product (5, 'Product 5', 'Iphone XR v5', 500),
    new Product (6, 'Product 6', 'Iphone XR v6', 600)
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
