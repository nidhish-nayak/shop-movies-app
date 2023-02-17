import { Injectable } from '@angular/core';
import MovieData from '../app/english-movie/EnglishMovieData.json';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieData: any;
  oneMovieData: any;

  constructor() {
    this.movieData = MovieData;
  }

  getMovieData() {
    return this.movieData;
  }

  getSelectedMovieData(movieTitle: any) {
    for (let movie of this.movieData) {
      if (movie.title == movieTitle) {
        this.oneMovieData = movie;
        break;
      }
    }
    return this.oneMovieData;
  }
}
