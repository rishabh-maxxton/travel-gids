import { Component } from '@angular/core';

@Component({
  selector: 'app-top-destination',
  templateUrl: './top-destination.component.html',
  styleUrl: './top-destination.component.css'
})
export class TopDestinationComponent {
  top = [
    {
      image : "asset/images/Dubai.jpg",
      name: "Dubai",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image : "asset/images/Singapore.jpg",
      name: "Singapore",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image : "asset/images/Tokyo.jpg",
      name: "Tokyo",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image : "asset/images/Bali.jpg",
      name: "Bali",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image : "asset/images/Maldives.jpg",
      name: "Maldives",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      image : "asset/images/NYC.jpg",
      name: "New York",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ]

  getThreeCards(index: number) {
    const start = index * 3;
    return this.top.slice(start, start + 3);
  }

  getChunks(arr: any[], chunkSize: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

}
