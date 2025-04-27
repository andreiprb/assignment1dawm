import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../models/coffee.model';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.css']
})
export class CoffeeCardComponent {
  coffee = input.required<Coffee>();
  orderCoffee = output<string>();

  constructor(private coffeeService: CoffeeService) {}

  onSelect() {
    this.coffeeService.setSelectedCoffee(this.coffee().name);
    this.orderCoffee.emit(this.coffee().name);
  }
}
