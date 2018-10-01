import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlejeSredniaComponent } from './oleje-srednia.component';

describe('OlejeSredniaComponent', () => {
  let component: OlejeSredniaComponent;
  let fixture: ComponentFixture<OlejeSredniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlejeSredniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlejeSredniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
