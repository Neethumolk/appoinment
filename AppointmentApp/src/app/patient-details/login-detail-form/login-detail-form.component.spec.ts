import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDetailFormComponent } from './login-detail-form.component';

describe('LoginDetailFormComponent', () => {
  let component: LoginDetailFormComponent;
  let fixture: ComponentFixture<LoginDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
