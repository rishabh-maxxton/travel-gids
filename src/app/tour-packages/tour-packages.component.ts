import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-packages',
  templateUrl: './tour-packages.component.html',
  styleUrl: './tour-packages.component.css'
})
export class TourPackagesComponent {
  tourPackages = [
    {
      name: "Bhurj Khalifa",
      location: 'Dubai',
      image: 'asset/images/Dubai.jpg',
      price: 200,
      rating: 4.5,
      discount: 10,
      votes: 30,
      wishlisted: false
    },
    {
      name: "Peek Mountain View",
      location: 'Bali',
      image: 'asset/images/Bali.jpg',
      price: 150,
      rating: 4.7,
      discount: 15,
      votes: 45,
      wishlisted: false
    },
    {
      name: "Sands SkyPark",
      location: 'Singapore',
      image: 'asset/images/Singapore.jpg',
      price: 180,
      rating: 4.6,
      discount: 12,
      votes: 38,
      wishlisted: false
    },
    {
      name: "Cinque Terre",
      location: 'Italy',
      image: 'asset/images/Italy.jpg',
      price: 220,
      rating: 4.8,
      discount: 8,
      votes: 50,
      wishlisted: false
    },
    {
      name: "Eiffel Tower",
      location: 'Paris',
      image: 'asset/images/Paris.jpg',
      price: 250,
      rating: 4.9,
      discount: 5,
      votes: 60,
      wishlisted: false
    },
    {
      name: "Discover Greece",
      location: 'Maldives',
      image: 'asset/images/Maldives.jpg',
      price: 300,
      rating: 4.8,
      discount: 10,
      votes: 55,
      wishlisted: false
    },
    {
      name: "Tour in New York",
      location: 'New York',
      image: 'asset/images/NYC.jpg',
      price: 350,
      rating: 4.7,
      discount: 7,
      votes: 42,
      wishlisted: false
    },
    {
      name: "TeamLab Borderless",
      location: 'Tokyo',
      image: 'asset/images/Tokyo.jpg',
      price: 280,
      rating: 4.6,
      discount: 9,
      votes: 47,
      wishlisted: false
    },
    {
      name: "Blue Mountains Day Tour",
      location: 'Sydney',
      image: 'asset/images/Sydney.jpg',
      price: 230,
      rating: 4.5,
      discount: 11,
      votes: 33,
      wishlisted: false
    }
  ];

  toggleWishlist(tourPackage: any) {
    tourPackage.wishlisted = !tourPackage.wishlisted;
  }

}
