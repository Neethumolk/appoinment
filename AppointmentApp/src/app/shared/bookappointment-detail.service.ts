import { Injectable } from '@angular/core';
import { BookappointmentDetail } from './bookappointment-detail.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BookappointmentDetailService {

  constructor(private http:HttpClient, private router:Router) { }
  formData:BookappointmentDetail = new BookappointmentDetail();
readonly baseUrl = 'http://localhost:56639/api/BookAppointmentDetail'

  postBookAppointmentDetail()
{
  return this.http.post(this.baseUrl, this.formData)

}

}
