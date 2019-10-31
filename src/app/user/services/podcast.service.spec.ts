import { TestBed } from '@angular/core/testing';

import { PodcastService } from './podcast.service';

describe('PodcastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PodcastService = TestBed.get(PodcastService);
    expect(service).toBeTruthy();
  });
});
