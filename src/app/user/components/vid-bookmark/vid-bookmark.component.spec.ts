import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidBookmarkComponent } from './vid-bookmark.component';

describe('VidBookmarkComponent', () => {
  let component: VidBookmarkComponent;
  let fixture: ComponentFixture<VidBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
