import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPodcastPageComponent } from './channel-podcast-page.component';

describe('ChannelPodcastPageComponent', () => {
  let component: ChannelPodcastPageComponent;
  let fixture: ComponentFixture<ChannelPodcastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPodcastPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPodcastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
