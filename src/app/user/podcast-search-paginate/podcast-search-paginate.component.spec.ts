import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastSearchPaginateComponent } from './podcast-search-paginate.component';

describe('PodcastSearchPaginateComponent', () => {
  let component: PodcastSearchPaginateComponent;
  let fixture: ComponentFixture<PodcastSearchPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastSearchPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastSearchPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
