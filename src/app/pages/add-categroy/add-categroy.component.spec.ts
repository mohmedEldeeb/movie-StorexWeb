import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategroyComponent } from './add-categroy.component';

describe('AddCategroyComponent', () => {
  let component: AddCategroyComponent;
  let fixture: ComponentFixture<AddCategroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategroyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
