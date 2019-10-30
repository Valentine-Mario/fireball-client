import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIdComponent } from './profile-id.component';

describe('ProfileIdComponent', () => {
  let component: ProfileIdComponent;
  let fixture: ComponentFixture<ProfileIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
