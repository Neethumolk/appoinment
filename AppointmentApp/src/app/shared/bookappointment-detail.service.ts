import { Injectable } from '@angular/core';
import { BookappointmentDetail } from './bookappointment-detail.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class BookappointmentDetailService {

  constructor(private http:HttpClient, private router:Router,private toastr : ToastrService) { }
  formData:BookappointmentDetail = new BookappointmentDetail();
readonly baseUrl = 'http://localhost:56639/api/BookAppointmentDetail'

  postBookAppointmentDetail()
{
  return this.http.post(this.baseUrl, this.formData).pipe(map(response=>{
   
    return response;
  

  }))

}

}
