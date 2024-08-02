import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  getReviews(){
    return axios.get("https://dummyjson.com/c/32fd-3102-4151-bfad");
  }
}
