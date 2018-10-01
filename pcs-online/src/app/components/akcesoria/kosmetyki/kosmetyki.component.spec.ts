import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosmetykiComponent } from './kosmetyki.component';

describe('KosmetykiComponent', () => {
  let component: KosmetykiComponent;
  let fixture: ComponentFixture<KosmetykiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosmetykiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosmetykiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
