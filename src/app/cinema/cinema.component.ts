import { Component } from '@angular/core';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {
	error: string = '';
	unitPrice: number = 12;
	maxTicketsByBuy: number = 7;
	saleOrder = {
		name: '',
		buyers: 1,
		quantity: 1,
		cardCinema: false,
		total: 0,
	}

  	calculate() {
		this.error = '';
		if (this.saleOrder.quantity > this.maxTicketsByBuy * this.saleOrder.buyers) {
			this.error = 'No puede comprar más de 7 boletos por persona';
			return;
		}

    	let total: number = 0;

        if (this.saleOrder.quantity > 5) {
            total = (this.saleOrder.quantity * this.unitPrice) * 0.85
		} else if (this.saleOrder.quantity > 2) {
            total = (this.saleOrder.quantity * this.unitPrice) * 0.90
		} else {
            total = (this.saleOrder.quantity * this.unitPrice)
		}

        if (this.saleOrder.cardCinema) {
            total = total * .90
		}


        this.saleOrder.total = total;
  	}
}
