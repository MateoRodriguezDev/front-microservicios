import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductView } from './create-product-view';

describe('CreateProductView', () => {
  let component: CreateProductView;
  let fixture: ComponentFixture<CreateProductView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
