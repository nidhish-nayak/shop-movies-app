import { Injectable } from '@angular/core';
import MovieData from '../app/english-movie/EnglishMovieData.json';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private mData: any;
  private oneMovieData: any;
  constructor() {
    this.mData = MovieData;
  }
  getMovieData() {
    return this.mData;
  }
  getSelectedMovieData(movieTitle: string): any {
    for (let movie of this.mData) {
      if (movie.title == movieTitle) {
        this.oneMovieData = movie;
        break;
      }
    }
    return this.oneMovieData;
  }
}
