import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 allProduct:any[];
 allProdSub;
 allCartProducts:any[];
 
  constructor() { 
    this.allCartProducts=[];
    console.log('ac',this.allCartProducts);
    
    this.allProduct=[
      {
        name:'Bag',
        p_img:'/assets/img/bag.png',
        rate:'1499'
      },
      {
        name:'Book',
        p_img:'/assets/img/book.png',
        rate:'45'
      },
      {
        name:'Boot',
        p_img:'/assets/img/boot.png',
        rate:'899'
      },
      {
        name:'Bottels',
        p_img:'/assets/img/bottels.png',
        rate:'160'
      },{
        name:'Ice Cream',
        p_img:'/assets/img/ice cream.png',
        rate:'220'
      },
      {
        name:'Mobile',
        p_img:'/assets/img/mob.png',
        rate:'9999'
      },
      {
        name:'Pen',
        p_img:'/assets/img/pen.png',
        rate:'60'
      },
      {
        name:'Rice',
        p_img:'/assets/img/rice.png',
        rate:'160'
      },
      {
        name:'Men Shirt',
        p_img:'/assets/img/shirt.png',
        rate:'160'
      },
    ]
    this.allProdSub= new BehaviorSubject<any>(this.allProduct);
  }
}
