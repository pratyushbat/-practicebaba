import { TestBed } from '@angular/core/testing';

import { NotcompleteGuard } from './notcomplete.guard';

describe('NotcompleteGuard', () => {
  let guard: NotcompleteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotcompleteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
