import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {

    //Get cart items from cartservice 
    this.cartItems = this.cartService.cartItems;

    //subscribe to totalPrice observable
    this.cartService.totolPrice.subscribe(
      data => this.totalPrice = data
    );

    //subscribe to totalQuantity observable
    this.cartService.totolQuantity.subscribe(
      data => this.totalQuantity = data
    );

    //Calculate totalPrice & totalQuantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(cartItem : CartItem){
    this.cartService.addToCart(cartItem);
  }

  decrementQuantity(cartItem : CartItem){
    this.cartService.decrementQuantity(cartItem);
  }

  remove(cartItem : CartItem){
    this.cartService.remove(cartItem);
  }

}
