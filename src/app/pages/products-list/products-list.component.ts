import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  async ngOnInit() {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics')
    const data = await response.json();
    this.products.set(data);
    console.log(data);
  }

  products = signal<Product[]>([
    /*{
      id:1,
      title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price:109.95,
      stock:0
    },
    {
      id:2,
      title:'Mens Casual Premium Slim Fit T-Shirts',
      image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      price:4.1,
      stock:102
    },
    {
      id:3,
      title:'Mens Cotton Jacket',
      image:'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      price:4.7,
      stock:500
    },
    {
      id:4,
      title:'Mens Casual Slim Fit',
      image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      price:2.1,
      stock:350
    }*/
  ]);
}
