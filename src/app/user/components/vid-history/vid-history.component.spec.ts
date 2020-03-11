import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidHistoryComponent } from './vid-history.component';

describe('VidHistoryComponent', () => {
  let component: VidHistoryComponent;
  let fixture: ComponentFixture<VidHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
