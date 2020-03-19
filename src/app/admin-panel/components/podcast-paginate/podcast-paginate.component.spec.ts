import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPaginateComponent } from './podcast-paginate.component';

describe('PodcastPaginateComponent', () => {
  let component: PodcastPaginateComponent;
  let fixture: ComponentFixture<PodcastPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
