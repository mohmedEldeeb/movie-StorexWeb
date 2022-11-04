import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdateMovieComponent } from './ubdate-movie.component';

describe('UbdateMovieComponent', () => {
  let component: UbdateMovieComponent;
  let fixture: ComponentFixture<UbdateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbdateMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbdateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
