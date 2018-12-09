import { TestBed, inject } from '@angular/core/testing';

import { DVDService } from './dvd.service';

describe('DVDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DVDService]
    });
  });

  it('should be created', inject([DVDService], (service: DVDService) => {
    expect(service).toBeTruthy();
  }));
});
