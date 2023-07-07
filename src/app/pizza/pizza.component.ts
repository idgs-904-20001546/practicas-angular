import { Component } from '@angular/core';
import { SaleOrder } from './sale-order.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
	currentOrder: SaleOrder = {
		client: '',
		address: '',
		phone: '',
		size: '',
		ingredients: [],
		quantity: 0
	}
	saleOrders: SaleOrder[] = [];
	ingredinets = [
		{
			name: 'Piña',
			price: 10,
		},
		{
			name: 'Champiñones',
			price: 10,
		},
		{
			name: 'Jamon',
			price: 10,
		}
	]
	pizzaSizes = [
		{
			name: 'Chica',
			price: 40,
		},
		{
			name: 'Mediana',
			price: 80,
		},
		{
			name: 'Grande',
			price: 120,
		}
	]

	onChangeIngredient(ingredient: string, checbox: any) {
		const isChecked: boolean = checbox.target['checked']; // or event.target.checked
		if(isChecked) {
			this.currentOrder.ingredients.push(ingredient);
		} else {
			this.currentOrder.ingredients = this.currentOrder.ingredients.filter(item => item != ingredient);
		}
	}

	onSaveOrder() {
		this.saleOrders.push(this.currentOrder);
	}

	getSaleOrderWithTotal(saleOrder: SaleOrder) {
		let total = this.pizzaSizes.find(pizza => pizza.name === saleOrder.size)?.price ?? 0;
		if (saleOrder.ingredients) {
			total += this.ingredinets.filter(ingredient => saleOrder.ingredients.includes(ingredient.name))
				.reduce((carry, ingredient) => carry + ingredient.price, 0);
		}
		saleOrder.total = total * saleOrder.quantity;
		return saleOrder;
	}
}
