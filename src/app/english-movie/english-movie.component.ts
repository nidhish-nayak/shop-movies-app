import { Component } from '@angular/core';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-english-movie',
  templateUrl: './english-movie.component.html',
  styleUrls: ['./english-movie.component.css'],
})
export class EnglishMovieComponent {
  data: any;
  constructor(objService: MovieService) {
    //dependency inject
    this.data = objService.getMovieData();
  }
}
