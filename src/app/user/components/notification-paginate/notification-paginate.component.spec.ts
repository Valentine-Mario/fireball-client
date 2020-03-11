import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPaginateComponent } from './notification-paginate.component';

describe('NotificationPaginateComponent', () => {
  let component: NotificationPaginateComponent;
  let fixture: ComponentFixture<NotificationPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
