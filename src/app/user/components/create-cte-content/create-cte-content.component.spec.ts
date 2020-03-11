import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCteContentComponent } from './create-cte-content.component';

describe('CreateCteContentComponent', () => {
  let component: CreateCteContentComponent;
  let fixture: ComponentFixture<CreateCteContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCteContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
