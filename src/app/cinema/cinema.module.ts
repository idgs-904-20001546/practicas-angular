import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaComponent } from './cinema.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CinemaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CinemaComponent
  ]
})
export class CinemaModule { }
