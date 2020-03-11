import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidHistoryPaginateComponent } from './vid-history-paginate.component';

describe('VidHistoryPaginateComponent', () => {
  let component: VidHistoryPaginateComponent;
  let fixture: ComponentFixture<VidHistoryPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidHistoryPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidHistoryPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
