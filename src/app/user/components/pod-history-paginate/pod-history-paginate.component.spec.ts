import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodHistoryPaginateComponent } from './pod-history-paginate.component';

describe('PodHistoryPaginateComponent', () => {
  let component: PodHistoryPaginateComponent;
  let fixture: ComponentFixture<PodHistoryPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodHistoryPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodHistoryPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
