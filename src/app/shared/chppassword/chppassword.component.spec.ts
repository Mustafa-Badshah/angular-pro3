import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChppasswordComponent } from './chppassword.component';

describe('ChppasswordComponent', () => {
  let component: ChppasswordComponent;
  let fixture: ComponentFixture<ChppasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChppasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChppasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
