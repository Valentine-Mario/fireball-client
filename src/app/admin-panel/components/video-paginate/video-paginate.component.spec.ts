import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPaginateComponent } from './video-paginate.component';

describe('VideoPaginateComponent', () => {
  let component: VideoPaginateComponent;
  let fixture: ComponentFixture<VideoPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
