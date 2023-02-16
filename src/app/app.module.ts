import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';
import { MovieSliderComponent } from './movie-slider/movie-slider.component';
import { EnglishMovieComponent } from './english-movie/english-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingMovieComponent,
    MovieSliderComponent,
    EnglishMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
