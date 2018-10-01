import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltryPowietrzaComponent } from './filtry-powietrza.component';

describe('FiltryPowietrzaComponent', () => {
  let component: FiltryPowietrzaComponent;
  let fixture: ComponentFixture<FiltryPowietrzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltryPowietrzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltryPowietrzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
