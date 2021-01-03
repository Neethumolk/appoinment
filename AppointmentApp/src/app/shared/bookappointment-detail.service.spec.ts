import { TestBed } from '@angular/core/testing';

import { BookappointmentDetailService } from './bookappointment-detail.service';

describe('BookappointmentDetailService', () => {
  let service: BookappointmentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookappointmentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
