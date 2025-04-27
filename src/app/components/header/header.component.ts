import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedCoffee = signal<string>('');

  constructor(private coffeeService: CoffeeService) {
    this.selectedCoffee = this.coffeeService.getSelectedCoffee();
  }

  updateSelectedCoffee(coffeeName: string) {
    this.coffeeService.setSelectedCoffee(coffeeName);
  }
}
