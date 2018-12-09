import { TestBed, inject } from '@angular/core/testing';

import { WestminsterLibraryManager } from './WestminsterLibraryManager';

describe('WestminsterLibraryManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WestminsterLibraryManager]
    });
  });

  it('should be created', inject([WestminsterLibraryManager], (service: WestminsterLibraryManager) => {
    expect(service).toBeTruthy();
  }));
});
