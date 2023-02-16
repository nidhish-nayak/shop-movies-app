import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-english-movie-details',
  templateUrl: './english-movie-details.component.html',
  styleUrls: ['./english-movie-details.component.css'],
})
export class EnglishMovieDetailsComponent {
  data: any;
  title: string = '';
  constructor(
    private objService: MovieService,
    private objActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.objActivatedRoute.params.subscribe((params) => {
      this.title = params['title'];
    });
    this.data = this.objService.getSelectedMovieData(this.title);
  }
}
