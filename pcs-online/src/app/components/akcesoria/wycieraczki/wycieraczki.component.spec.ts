import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WycieraczkiComponent } from './wycieraczki.component';

describe('WycieraczkiComponent', () => {
  let component: WycieraczkiComponent;
  let fixture: ComponentFixture<WycieraczkiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WycieraczkiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WycieraczkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
