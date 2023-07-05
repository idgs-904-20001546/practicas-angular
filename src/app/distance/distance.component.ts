import { Component } from '@angular/core';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  result: number = 0;

  calculate() {
    let first = (this.x2 - this.x1) ** 2;
    let second = (this.y2 - this.y1) ** 2;
    let prev = first + second;
    this.result = Math.sqrt(prev < 0 ? prev * -1: prev);
  }
}
