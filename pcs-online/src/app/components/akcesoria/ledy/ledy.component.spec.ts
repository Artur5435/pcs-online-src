import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedyComponent } from './ledy.component';

describe('LedyComponent', () => {
  let component: LedyComponent;
  let fixture: ComponentFixture<LedyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
