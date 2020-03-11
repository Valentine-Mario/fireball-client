import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSerachFormComponent } from './channel-serach-form.component';

describe('ChannelSerachFormComponent', () => {
  let component: ChannelSerachFormComponent;
  let fixture: ComponentFixture<ChannelSerachFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSerachFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSerachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
