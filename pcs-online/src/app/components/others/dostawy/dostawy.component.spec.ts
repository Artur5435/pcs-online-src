import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DostawyComponent } from './dostawy.component';

describe('DostawyComponent', () => {
  let component: DostawyComponent;
  let fixture: ComponentFixture<DostawyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DostawyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DostawyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
