import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 products:[];
 searchInput = '';
  constructor( private service:AppService,public router:Router) { }

  ngOnInit(){
 this.service.allProdSub.subscribe(e=>{
   this.products=e;
   console.log('p',this.products); 
    });
  }

  goToCart(){
    this.router.navigate(['/cart']);

  }
  addCart(add){
    console.log('add',add);
    let temp=this.service.allCartProducts.find(e=>{
      if(e==add){
        return true;
      }else{
        return false;
      }
    })
    if(temp!=null && temp!=undefined)
    {
      temp.qyt++;
    }else{
      add['qyt']=1;
    this.service.allCartProducts.push(add);
    }
  
  }



}
