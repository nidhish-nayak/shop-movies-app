import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMovieComponent } from './english-movie.component';

describe('EnglishMovieComponent', () => {
  let component: EnglishMovieComponent;
  let fixture: ComponentFixture<EnglishMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
