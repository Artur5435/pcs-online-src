import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltryPaliwaComponent } from './filtry-paliwa.component';

describe('FiltryPaliwaComponent', () => {
  let component: FiltryPaliwaComponent;
  let fixture: ComponentFixture<FiltryPaliwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltryPaliwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltryPaliwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
