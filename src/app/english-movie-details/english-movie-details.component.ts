import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-english-movie-details',
  templateUrl: './english-movie-details.component.html',
  styleUrls: ['./english-movie-details.component.css'],
})
export class EnglishMovieDetailsComponent {
  movieData: any;

  title = '';
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {
    this.movieData = movieService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params['mTitle'];
    });
    this.movieData = this.movieService.getSelectedMovieData(this.title);
  }
}
