import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedToCartComponent } from './proceed-to-cart.component';

describe('ProceedToCartComponent', () => {
  let component: ProceedToCartComponent;
  let fixture: ComponentFixture<ProceedToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
