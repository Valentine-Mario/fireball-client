import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodBookmarkPaginateComponent } from './pod-bookmark-paginate.component';

describe('PodBookmarkPaginateComponent', () => {
  let component: PodBookmarkPaginateComponent;
  let fixture: ComponentFixture<PodBookmarkPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodBookmarkPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodBookmarkPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
