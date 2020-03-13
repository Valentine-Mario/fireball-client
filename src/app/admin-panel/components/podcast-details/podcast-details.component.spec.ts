import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastDetailsComponent } from './podcast-details.component';

describe('PodcastDetailsComponent', () => {
  let component: PodcastDetailsComponent;
  let fixture: ComponentFixture<PodcastDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
