import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelVideoPagePaginateComponent } from './channel-video-page-paginate.component';

describe('ChannelVideoPagePaginateComponent', () => {
  let component: ChannelVideoPagePaginateComponent;
  let fixture: ComponentFixture<ChannelVideoPagePaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelVideoPagePaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelVideoPagePaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
