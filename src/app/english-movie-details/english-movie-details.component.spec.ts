import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishMovieDetailsComponent } from './english-movie-details.component';

describe('EnglishMovieDetailsComponent', () => {
  let component: EnglishMovieDetailsComponent;
  let fixture: ComponentFixture<EnglishMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishMovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
