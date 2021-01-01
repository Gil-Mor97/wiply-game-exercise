import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareBoardComponent } from './square-board.component';

describe('SquareBoardComponent', () => {
  let component: SquareBoardComponent;
  let fixture: ComponentFixture<SquareBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
