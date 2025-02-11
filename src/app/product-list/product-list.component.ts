import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [CurrencyPipe]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  viewDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
    alert(`${product.name} added to cart.`);
  }

   
  formatPrice(price: number): string {
    const formattedPrice = this.currencyPipe.transform(price, 'INR');
    return formattedPrice ? formattedPrice : '';   
  }
}
