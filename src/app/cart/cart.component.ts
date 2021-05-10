import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProd: any[];
  c = 1;
  total=0;
  constructor(private service: AppService) { }

  ngOnInit() {

    this.cartProd = this.service.allCartProducts;
    this.sum();

  }
  plusFn(c) {
    c.qyt++;
    this.sum();
  }
  minusFn(c) {
    if (c.qyt > 1) {
      c.qyt--;
    } else {
      let i = this.service.allCartProducts.indexOf(c);
      this.service.allCartProducts.splice(i, 1);
    }
    this.sum();

  }
  sum(){
    this.total=0;
    this.service.allCartProducts.forEach(e => {
      this.total+=e.qyt*e.rate;
    });
  }
  showAlert(){
    alert("Your Total amount is "+this.total)
  }
}
