import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CoffeeCardComponent],
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent {
  searchTerm: string = '';
  coffeeService = inject(CoffeeService);

  coffeeSelected = output<string>();

  onSearch() {
    this.coffeeService.setSearchQuery(this.searchTerm);
  }

  onOrderCoffee(coffeeName: string) {
    this.coffeeSelected.emit(coffeeName);
  }
}
