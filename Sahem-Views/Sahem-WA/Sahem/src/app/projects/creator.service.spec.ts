import { TestBed } from '@angular/core/testing';

import { CreatorService } from './creator.service';

describe('CreatorService', () => {
  let service: CreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
