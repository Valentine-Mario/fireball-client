import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPaginateComponent } from './channel-paginate.component';

describe('ChannelPaginateComponent', () => {
  let component: ChannelPaginateComponent;
  let fixture: ComponentFixture<ChannelPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
