import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPodcastComponent } from './channel-podcast.component';

describe('ChannelPodcastComponent', () => {
  let component: ChannelPodcastComponent;
  let fixture: ComponentFixture<ChannelPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
