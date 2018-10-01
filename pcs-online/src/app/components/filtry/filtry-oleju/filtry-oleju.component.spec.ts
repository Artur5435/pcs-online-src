import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltryOlejuComponent } from './filtry-oleju.component';

describe('FiltryOlejuComponent', () => {
  let component: FiltryOlejuComponent;
  let fixture: ComponentFixture<FiltryOlejuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltryOlejuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltryOlejuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
