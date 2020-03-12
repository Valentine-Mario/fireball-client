import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaginateComponent } from './user-paginate.component';

describe('UserPaginateComponent', () => {
  let component: UserPaginateComponent;
  let fixture: ComponentFixture<UserPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
