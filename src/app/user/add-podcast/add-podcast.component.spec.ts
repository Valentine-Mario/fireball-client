import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPodcastComponent } from './add-podcast.component';

describe('AddPodcastComponent', () => {
  let component: AddPodcastComponent;
  let fixture: ComponentFixture<AddPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
