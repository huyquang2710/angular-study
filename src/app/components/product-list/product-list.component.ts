import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]  = [
    new Product("01", "Hat"),
    new Product("02", "Len")
  ]

  constructor() { }

  changeStarRating(message: string) {
    console.log(`Message:  ${message}`);
  }

  ngOnInit() {
  }

}
