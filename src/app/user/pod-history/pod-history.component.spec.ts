import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodHistoryComponent } from './pod-history.component';

describe('PodHistoryComponent', () => {
  let component: PodHistoryComponent;
  let fixture: ComponentFixture<PodHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
