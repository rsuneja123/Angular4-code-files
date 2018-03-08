import { TestBed, inject } from '@angular/core/testing';

import { HttpTrialService } from './http-trial.service';

describe('HttpTrialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTrialService]
    });
  });

  it('should be created', inject([HttpTrialService], (service: HttpTrialService) => {
    expect(service).toBeTruthy();
  }));
});
