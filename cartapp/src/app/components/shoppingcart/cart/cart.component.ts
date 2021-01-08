import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];

  cartTotal = 0;


  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product): void {

      let productExists = false;

      for (const i in this.cartItems) {
        if (this.cartItems[i].productId === product.id) {
            this.cartItems[i].qty++;
            productExists = true;
            break;
        }
      }

      if (!productExists) {
          this.cartItems.push({
            productId: product.id,
            productName: product.name,
            qty: 1,
            price: product.price
          });
        }


      this.cartTotal = 0;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price);
      });
  }


}
