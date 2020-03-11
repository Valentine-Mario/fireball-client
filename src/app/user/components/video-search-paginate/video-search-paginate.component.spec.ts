import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSearchPaginateComponent } from './video-search-paginate.component';

describe('VideoSearchPaginateComponent', () => {
  let component: VideoSearchPaginateComponent;
  let fixture: ComponentFixture<VideoSearchPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSearchPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSearchPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
