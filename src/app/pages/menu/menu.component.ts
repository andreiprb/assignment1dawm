import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { CoffeeListComponent } from '../../components/coffee-list/coffee-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CoffeeListComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('header') headerComponent!: HeaderComponent;

  handleCoffeeSelected(coffeeName: string) {
    console.log(`Selected coffee from menu: ${coffeeName}`);
    this.headerComponent.updateSelectedCoffee(coffeeName);
  }
}
