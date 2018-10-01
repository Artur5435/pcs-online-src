import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlejePremiumComponent } from './oleje-premium.component';

describe('OlejePremiumComponent', () => {
  let component: OlejePremiumComponent;
  let fixture: ComponentFixture<OlejePremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlejePremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlejePremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
