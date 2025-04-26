import { Injectable, signal } from '@angular/core';
import { Coffee } from '../models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffees = signal<Coffee[]>([
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong black coffee made by forcing steam through ground coffee beans',
      price: 3.50,
      image: 'assets/images/espresso.jpg'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso-based coffee drink prepared with steamed milk foam',
      price: 4.50,
      image: 'assets/images/cappuccino.jpg'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Coffee drink made with espresso and steamed milk',
      price: 4.00,
      image: 'assets/images/latte.jpg'
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Chocolate-flavored variant of a latte',
      price: 5.00,
      image: 'assets/images/mocha.jpg'
    },
    {
      id: 5,
      name: 'Americano',
      description: 'Coffee prepared by diluting an espresso with hot water',
      price: 3.00,
      image: 'assets/images/americano.jpg'
    },
    {
      id: 6,
      name: 'Macchiato',
      description: 'Espresso coffee drink with a small amount of milk',
      price: 3.75,
      image: 'assets/images/macchiato.jpg'
    }
  ]);

  private searchQuery = signal<string>('');

  constructor() { }

  getFilteredCoffees() {
    const query = this.searchQuery();
    const allCoffees = this.coffees();

    if (!query.trim()) {
      return allCoffees;
    }

    return allCoffees.filter(coffee =>
      coffee.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  setSearchQuery(query: string) {
    this.searchQuery.set(query);
  }
}
