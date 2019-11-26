import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidBookmarkPaginateComponent } from './vid-bookmark-paginate.component';

describe('VidBookmarkPaginateComponent', () => {
  let component: VidBookmarkPaginateComponent;
  let fixture: ComponentFixture<VidBookmarkPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidBookmarkPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidBookmarkPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
