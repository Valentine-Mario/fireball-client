import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodetailsComponent } from './audiodetails.component';

describe('AudiodetailsComponent', () => {
  let component: AudiodetailsComponent;
  let fixture: ComponentFixture<AudiodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
