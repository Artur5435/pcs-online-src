import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlejeEkoComponent } from './oleje-eko.component';

describe('OlejeEkoComponent', () => {
  let component: OlejeEkoComponent;
  let fixture: ComponentFixture<OlejeEkoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlejeEkoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlejeEkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
