import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-movie',
  templateUrl: './trending-movie.component.html',
  styleUrls: ['./trending-movie.component.css'],
})
export class TrendingMovieComponent {
  movies = [
    {
      Title: 'They Shall Not Grow Old',
      Year: 2018,
      Rated: 'R',
      Released: '01 Feb 2019',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg',
    },
    {
      Title: 'Midnight Family',
      Year: 2019,
      Rated: 'N/A',
      Released: '06 Dec 2019',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMGYyZTk5MjYtNGY2ZS00NzRhLTgwMWMtZjhmMmQ4OGFkNTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Pain & Gain',
      Year: 2013,
      Rated: 'R',
      Released: '26 Apr 2013',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'The Irishman',
      Year: 2019,
      Rated: 'R',
      Released: '27 Nov 2019',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg',
    },
  ];
}
