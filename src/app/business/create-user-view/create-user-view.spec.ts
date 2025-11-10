import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserView } from './create-user-view';

describe('CreateUserView', () => {
  let component: CreateUserView;
  let fixture: ComponentFixture<CreateUserView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
