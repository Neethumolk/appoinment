import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailFormComponent } from './doctor-detail-form.component';

describe('DoctorDetailFormComponent', () => {
  let component: DoctorDetailFormComponent;
  let fixture: ComponentFixture<DoctorDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
