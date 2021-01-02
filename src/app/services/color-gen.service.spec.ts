import { TestBed } from '@angular/core/testing';

import { ColorGenService } from './color-gen.service';

describe('ColorGenService', () => {
  let service: ColorGenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorGenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
