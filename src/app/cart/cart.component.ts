import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cart = this.productService.getCart();
    this.total = this.productService.getTotal();
  }

  removeFromCart(id: number): void {
    this.productService.removeFromCart(id);
    this.cart = this.productService.getCart();
    this.total = this.productService.getTotal();
  }
}
