import { TestBed } from '@angular/core/testing';

import { OutsService } from './outs.service';

describe('OutsService', () => {
  let service: OutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
