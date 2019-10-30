import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodBookmarkComponent } from './pod-bookmark.component';

describe('PodBookmarkComponent', () => {
  let component: PodBookmarkComponent;
  let fixture: ComponentFixture<PodBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
