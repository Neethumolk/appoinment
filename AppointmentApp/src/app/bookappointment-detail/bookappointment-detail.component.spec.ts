import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappointmentDetailComponent } from './bookappointment-detail.component';

describe('BookappointmentDetailComponent', () => {
  let component: BookappointmentDetailComponent;
  let fixture: ComponentFixture<BookappointmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookappointmentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookappointmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
