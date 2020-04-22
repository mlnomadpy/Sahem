import { TestBed } from '@angular/core/testing';

import { Loc8rDataService } from './loc8r-data.service';

describe('Loc8rDataService', () => {
  let service: Loc8rDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loc8rDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
