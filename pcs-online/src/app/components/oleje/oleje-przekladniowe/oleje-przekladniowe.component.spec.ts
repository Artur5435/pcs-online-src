import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlejePrzekladnioweComponent } from './oleje-przekladniowe.component';

describe('OlejePrzekladnioweComponent', () => {
  let component: OlejePrzekladnioweComponent;
  let fixture: ComponentFixture<OlejePrzekladnioweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlejePrzekladnioweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlejePrzekladnioweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
