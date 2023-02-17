import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishMovieDetailsComponent } from './english-movie-details/english-movie-details.component';
import { EnglishMovieComponent } from './english-movie/english-movie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movie',
    component: EnglishMovieComponent,
  },
  { path: 'movie/:title', component: EnglishMovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
