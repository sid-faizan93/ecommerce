import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product = new Product();

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails(){
    
    const productId: number = +this.route.snapshot.paramMap.get("id");

    this.productService.getProduct(productId).subscribe(
      data => {
        this.product = data;
      }
    )

  }

  addToCart(){
    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);

    const cartitem : CartItem = new CartItem(this.product);

    this.cartService.addToCart(cartitem);

  }

}
