import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltryKabinyComponent } from './filtry-kabiny.component';

describe('FiltryKabinyComponent', () => {
  let component: FiltryKabinyComponent;
  let fixture: ComponentFixture<FiltryKabinyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltryKabinyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltryKabinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
