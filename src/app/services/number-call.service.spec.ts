import { TestBed } from '@angular/core/testing';

import { NumberCallService } from './number-call.service';

describe('NumberCallService', () => {
  let service: NumberCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
