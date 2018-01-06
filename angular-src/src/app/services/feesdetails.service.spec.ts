import { TestBed, inject } from '@angular/core/testing';

import { FeesdetailsService } from './feesdetails.service';

describe('FeesdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeesdetailsService]
    });
  });

  it('should be created', inject([FeesdetailsService], (service: FeesdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
