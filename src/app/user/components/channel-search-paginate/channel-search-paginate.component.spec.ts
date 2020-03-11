import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSearchPaginateComponent } from './channel-search-paginate.component';

describe('ChannelSearchPaginateComponent', () => {
  let component: ChannelSearchPaginateComponent;
  let fixture: ComponentFixture<ChannelSearchPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelSearchPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSearchPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
