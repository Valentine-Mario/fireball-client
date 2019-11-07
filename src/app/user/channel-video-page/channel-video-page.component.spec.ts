import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelVideoPageComponent } from './channel-video-page.component';

describe('ChannelVideoPageComponent', () => {
  let component: ChannelVideoPageComponent;
  let fixture: ComponentFixture<ChannelVideoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelVideoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
