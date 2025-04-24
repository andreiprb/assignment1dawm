import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header></app-header>

    <main class="py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-8 text-center text-brown-800">About Coffee Heaven</h1>

        <div class="max-w-3xl mx-auto">
          <p class="text-lg mb-6">
            Founded in 2010, Coffee Heaven started as a small coffee cart in the local farmers' market.
            Our founder, Maria Gonzalez, a coffee enthusiast with a background in agricultural science,
            was determined to bring ethically sourced, perfectly roasted coffee to her community.
          </p>

          <p class="text-lg mb-6">
            What began as a weekend hobby quickly grew into a passion project as locals fell in love with
            Maria's carefully crafted brews. Within two years, we opened our first brick-and-mortar location
            in downtown Brewville, and we've been growing ever since.
          </p>

          <h2 class="text-2xl font-bold mt-10 mb-4 text-brown-700">Our Philosophy</h2>

          <p class="text-lg mb-6">
            At Coffee Heaven, we believe that great coffee comes from great relationships. We work directly
            with farmers in Colombia, Ethiopia, Guatemala, and other coffee-growing regions to ensure fair
            pricing and sustainable farming practices.
          </p>

          <p class="text-lg mb-6">
            Our master roasters honor each bean's unique characteristics, developing custom roast profiles
            that highlight the natural flavors and aromas. We roast in small batches to ensure freshness
            and quality control.
          </p>

          <h2 class="text-2xl font-bold mt-10 mb-4 text-brown-700">Our Community</h2>

          <p class="text-lg mb-6">
            Coffee Heaven is more than just a coffee shop—it's a community hub. We host monthly coffee
            tastings, latte art workshops, and sponsor local events. We're proud to employ a diverse team
            of coffee enthusiasts who share our passion for excellence.
          </p>

          <p class="text-lg">
            Thank you for being part of our journey. We look forward to serving you the perfect cup of coffee!
          </p>
        </div>
      </div>
    </main>

    <footer class="bg-brown-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 Coffee Heaven. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .text-brown-700 {
      color: #5D4037;
    }
    .text-brown-800 {
      color: #4E342E;
    }
    .bg-brown-900 {
      background-color: #3E2723;
    }
  `]
})
export class AboutComponent {}
