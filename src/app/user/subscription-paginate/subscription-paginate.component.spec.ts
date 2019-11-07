import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPaginateComponent } from './subscription-paginate.component';

describe('SubscriptionPaginateComponent', () => {
  let component: SubscriptionPaginateComponent;
  let fixture: ComponentFixture<SubscriptionPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
