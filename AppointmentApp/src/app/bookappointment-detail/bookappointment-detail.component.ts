import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { count } from 'console';
import { ToastrService } from 'ngx-toastr';
import { DoctorDetail } from '../shared/admin-page.model';
import { AdminPageService } from '../shared/admin-page.service';
import { BookappointmentDetail } from '../shared/bookappointment-detail.model';
import { BookappointmentDetailService } from '../shared/bookappointment-detail.service';
//import { BookAppointmentDetailService} from 'src/app/shared/bookappointment-detail.service';
import {PatientDetailService } from '../shared/patient-detail.service';
 import{Router} from '@angular/router'
@Component({
  selector: 'app-bookappointment-detail',
  templateUrl: './bookappointment-detail.component.html',
  styleUrls: ['./bookappointment-detail.component.css']
})
export class BookappointmentDetailComponent implements OnInit {

  constructor(public service: BookappointmentDetailService, public services : AdminPageService,
    private toastr: ToastrService, private router : Router) { }
    logout()
    {
      this.router.navigateByUrl('/patientregisterdetail');
    }
  
  ngOnInit(): void {
    this.services.refreshlist(); 
    
  }
 
 tokennumber:number=0;
 /* populateForm(selectedRecord:DoctorDetail){
    this.services.formData =Object.assign({},selectedRecord);
  }*/
 
  onSubmit(form: NgForm)
{
  
  this.service.postBookAppointmentDetail().subscribe(
    res => {  
   
    },
    err => {console.log(err)}
  );
  //alert("successfully inserted");
  this.resetForm(form);
  this.toastr.success('Appointment Suceessful','Bookappoint ment');
  

  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formData = new BookappointmentDetail();
  }
 
 /* tokenNumber(form:NgForm)
  {
    this.service.formData= new BookappointmentDetail();
  }*/
}
 

