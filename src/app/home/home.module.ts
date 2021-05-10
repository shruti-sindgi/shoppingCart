import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StyleDirective } from '../style.directive';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';


@NgModule({
  declarations: [HomeComponent,
    StyleDirective,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }
