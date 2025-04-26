import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import {RouterLink} from '@angular/router';

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
              class="message-button bg-brown-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-brown-700 transition-all"
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
    .message-button {
      border: none;
      outline: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s ease, background-color 0.3s ease;
      text-transform: none !important;
      font-weight: normal !important;
    }
    .message-button:hover {
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3);
      outline: none;
    }
    .message-button:active {
      background-color: #3E2723 !important; /* brown 900 - și mai închis */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); /* shadow mai adânc */
      transform: scale(0.97); /* ușoară micșorare la click, pentru senzație de apăsare */
    }
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

    /* Form container îmbunătățit */
    .max-w-2xl {
      background-color: #ffffff;
      padding: 3rem;
      border-radius: 1rem; /* colțuri mai rotunjite */
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); /* umbră mai difuză */
      border: 1px solid #e0e0e0; /* contur foarte subtil */
    }

    /* Spacings mai aerisite între câmpuri */
    form > div {
      margin-bottom: 1.5rem;
    }

    /* Inputuri și textarea mai elegante */
    input[type="text"], input[type="email"], textarea {
      border-radius: 0.75rem;
      padding: 1rem;
      border: 1px solid #ccc;
      background-color: #fafafa;
      transition: all 0.3s ease;
    }

    input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
      background-color: #fff;
      border-color: #8D6E63;
      box-shadow: 0 0 0 3px rgba(141, 110, 99, 0.3);
    }

    /* Butonul de submit cu mici ajustări */
    button[type="submit"] {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
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
