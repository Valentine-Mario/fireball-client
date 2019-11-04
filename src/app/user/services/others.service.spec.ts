import { TestBed } from '@angular/core/testing';

import { OthersService } from './others.service';

describe('OthersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OthersService = TestBed.get(OthersService);
    expect(service).toBeTruthy();
  });
});
