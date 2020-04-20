import { TestBed } from '@angular/core/testing';

import { CreatorsService } from './creators.service';

describe('CreatorService', () => {
  let service: CreatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
