import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  reviews: any[] = [];

  constructor(private reviewsService: ReviewService){}

  ngOnInit(){
    this.reviewsService.getReviews().then(response => {
      this.reviews = response.data;
    });
    
  }

}
