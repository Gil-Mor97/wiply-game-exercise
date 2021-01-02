import { TestBed } from '@angular/core/testing';

import { SquareFirebaseService } from './square-firebase.service';

describe('SquareFirebaseService', () => {
  let service: SquareFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquareFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
