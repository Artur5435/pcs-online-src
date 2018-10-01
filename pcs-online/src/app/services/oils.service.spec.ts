import { TestBed, inject } from '@angular/core/testing';

import { OilsService } from './oils.service';

describe('OilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OilsService]
    });
  });

  it('should be created', inject([OilsService], (service: OilsService) => {
    expect(service).toBeTruthy();
  }));
});
