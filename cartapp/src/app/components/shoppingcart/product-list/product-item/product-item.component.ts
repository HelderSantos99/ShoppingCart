import { MessengerService } from './../../../../services/messenger.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(): void {
    this.msg.sendMsg(this.productItem); // envia info do produto para o msg service
  }

}
