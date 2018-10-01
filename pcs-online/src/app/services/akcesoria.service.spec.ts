import { TestBed, inject } from '@angular/core/testing';

import { AkcesoriaService } from './akcesoria.service';

describe('AkcesoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AkcesoriaService]
    });
  });

  it('should be created', inject([AkcesoriaService], (service: AkcesoriaService) => {
    expect(service).toBeTruthy();
  }));
});
