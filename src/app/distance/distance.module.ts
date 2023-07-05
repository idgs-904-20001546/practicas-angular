import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DistanceComponent } from './distance.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    DistanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    DistanceComponent
  ]
})
export class DistanceModule { }
