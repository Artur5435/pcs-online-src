import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SklepStacjonarnyComponent } from './sklep-stacjonarny.component';

describe('SklepStacjonarnyComponent', () => {
  let component: SklepStacjonarnyComponent;
  let fixture: ComponentFixture<SklepStacjonarnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SklepStacjonarnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SklepStacjonarnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
