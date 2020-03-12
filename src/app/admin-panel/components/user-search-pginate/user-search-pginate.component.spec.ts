import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchPginateComponent } from './user-search-pginate.component';

describe('UserSearchPginateComponent', () => {
  let component: UserSearchPginateComponent;
  let fixture: ComponentFixture<UserSearchPginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchPginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchPginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
