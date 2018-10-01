import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapachyComponent } from './zapachy.component';

describe('ZapachyComponent', () => {
  let component: ZapachyComponent;
  let fixture: ComponentFixture<ZapachyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapachyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapachyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
