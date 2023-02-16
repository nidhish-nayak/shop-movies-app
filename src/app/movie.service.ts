import { Injectable } from '@angular/core';
import MovieData from '../app/english-movie/EnglishMovieData.json';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private mData: any;
  constructor() {
    this.mData = MovieData;
  }
  getMovieData() {
    return this.mData;
  }
}
