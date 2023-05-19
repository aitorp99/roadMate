import { TestBed } from '@angular/core/testing';

import { AdvertismentsService } from './advertisments.service';

describe('AdvertismentsService', () => {
  let service: AdvertismentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertismentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
