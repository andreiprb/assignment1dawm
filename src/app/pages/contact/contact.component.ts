import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  template: `
    <app-header></app-header>

    <div class="pt-24 bg-brown-50 min-h-screen">
      <br><br><br>
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold mb-12 text-center text-brown-800">Contact Us</h1>

        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-4 text-brown-700">Get in Touch</h2>
            <p class="text-gray-600 mb-4">
              We'd love to hear from you! Fill out the form below or reach out to us using the contact information.
            </p>
          </div>

          <form class="mb-8">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                [(ngModel)]="contactForm.name"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-400"
              >
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                [(ngModel)]="contactForm.email"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-400"
              >
            </div>

            <div class="mb-4">
              <label for="message" class="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                [(ngModel)]="contactForm.message"
                class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brown-400"
              ></textarea>
            </div>

            <button
              type="submit"
              (click)="onSubmit()"
              class="bg-brown-600 text-white px-6 py-3 rounded hover:bg-brown-700 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div class="contact-info">
            <h3 class="text-xl font-semibold mb-4 text-brown-700">Contact Information</h3>
            <p class="mb-2"><strong>Address:</strong> 123 Coffee Street, Brewville, CB 43210</p>
            <p class="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
            <p class="mb-2"><strong>Email:</strong> info&#64;coffeeheaven.com</p>
            <p><strong>Hours:</strong> Monday-Friday: 7am-8pm, Saturday: 8am-8pm, Sunday: 9am-6pm</p>
          </div>
        </div>
      </div>
    </div>

    <footer class="bg-brown-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 Coffee Heaven. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .bg-brown-50 {
      background-color: #EFEBE9;
    }
    .text-brown-700 {
      color: #5D4037;
    }
    .text-brown-800 {
      color: #4E342E;
    }
    .bg-brown-600 {
      background-color: #795548;
    }
    .hover\\:bg-brown-700:hover {
      background-color: #5D4037;
    }
    .bg-brown-900 {
      background-color: #3E2723;
    }
    .focus\\:ring-brown-400:focus {
      --tw-ring-color: #8D6E63;
      --tw-ring-opacity: 1;
    }
  `]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // In a real app, would send this data to a server
    alert('Thanks for your message! We\'ll get back to you soon.');
    this.contactForm = { name: '', email: '', message: '' };
  }
}
