import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPodcastPagePaginateComponent } from './channel-podcast-page-paginate.component';

describe('ChannelPodcastPagePaginateComponent', () => {
  let component: ChannelPodcastPagePaginateComponent;
  let fixture: ComponentFixture<ChannelPodcastPagePaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPodcastPagePaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPodcastPagePaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
