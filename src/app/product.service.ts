import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'iPhone 14', price: 999, description: 'Latest Apple iPhone.', image: 'assets/image/iphone.jpg' },
    { id: 2, name: 'Samsung Galaxy S22', price: 899, description: 'Flagship Samsung phone.', image: 'assets/image/samsung.avif' },
    { id: 3, name: 'Google Pixel 7', price: 799, description: 'Latest Google Pixel phone.', image: 'assets/image/googlepixel.jpg' },
  ];
  

  private cart: Product[] = [];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter(product => product.id !== id);
  }

  getTotal(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
