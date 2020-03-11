import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPagpaginateComponent } from './video-pagpaginate.component';

describe('VideoPagpaginateComponent', () => {
  let component: VideoPagpaginateComponent;
  let fixture: ComponentFixture<VideoPagpaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPagpaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPagpaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
