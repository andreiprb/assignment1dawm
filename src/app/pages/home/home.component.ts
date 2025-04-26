import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CoffeeListComponent } from '../../components/coffee-list/coffee-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CoffeeListComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('header') headerComponent!: HeaderComponent;

  handleCoffeeSelected(coffeeName: string) {
    this.headerComponent.updateSelectedCoffee(coffeeName);
  }
}
