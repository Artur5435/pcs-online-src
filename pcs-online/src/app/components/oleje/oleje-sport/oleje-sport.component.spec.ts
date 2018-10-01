import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlejeSportComponent } from './oleje-sport.component';

describe('OlejeSportComponent', () => {
  let component: OlejeSportComponent;
  let fixture: ComponentFixture<OlejeSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlejeSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlejeSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
