import { TestBed, inject } from '@angular/core/testing';

import { LibraryItemService } from './library-item.service';

describe('LibraryItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryItemService]
    });
  });

  it('should be created', inject([LibraryItemService], (service: LibraryItemService) => {
    expect(service).toBeTruthy();
  }));
});
