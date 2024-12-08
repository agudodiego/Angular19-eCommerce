import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  constructor() { }

  addToCart(prod: Product) {
    this.cart.set( [...this.cart(), prod] );
  }

  remove(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }
}
