import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishMovieComponent } from './english-movie/english-movie.component';

const routes: Routes = [
  {
    path: 'movie',
    component: EnglishMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
