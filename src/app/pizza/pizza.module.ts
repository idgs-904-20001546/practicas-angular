import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzaComponent } from './pizza.component';



@NgModule({
  declarations: [
    PizzaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PizzaComponent
  ]
})
export class PizzaModule { }
