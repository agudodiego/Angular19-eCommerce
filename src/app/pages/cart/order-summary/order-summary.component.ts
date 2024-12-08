import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

  cartService = inject(CartService);

  // computed es basicamente una funcion que devuelve el valor que queramos usando el valor de un signal
  total = computed(()=>{

    let total = 0;
    for (const item of this.cartService.cart()){
      total += item.price;
    }

    return total;
  }) 

}
