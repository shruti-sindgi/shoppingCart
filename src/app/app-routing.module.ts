import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home', loadChildren:()=>import('./home/home.module').then(e=>e.HomeModule) },
  { path:'cart', loadChildren:()=>import('./cart/cart.module').then(e=>e.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
