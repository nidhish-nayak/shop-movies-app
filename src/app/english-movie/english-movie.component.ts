import { Component } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-english-movie',
  templateUrl: './english-movie.component.html',
  styleUrls: ['./english-movie.component.css'],
})
export class EnglishMovieComponent {
  englishMovieData: any;
  constructor(movieService: MovieService) {
    this.englishMovieData = movieService.getMovieData();
  }
}
