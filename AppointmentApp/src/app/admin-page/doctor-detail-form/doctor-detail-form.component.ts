import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {  DoctorDetail } from 'src/app/shared/admin-page.model';
import { AdminPageService } from 'src/app/shared/admin-page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-detail-form',
  templateUrl: './doctor-detail-form.component.html',
  styleUrls: ['./doctor-detail-form.component.css']
})
export class DoctorDetailFormComponent implements OnInit {

  constructor(public service:AdminPageService,
    private toastr: ToastrService, private router : Router) { }

  ngOnInit(): void {
   
  }
  //logOut(){
   //  this.router.navigateByUrl('/sigin') 
  //}
onSubmit(form:NgForm)
{
  this.service.postDoctorDetail().subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshlist();
      this.toastr.success('Addded Successfully ','Doctor List')
    },
    err =>{ console.log(err); }
  );
  if (this.service.formData.doctorId ==0)
  {
      this.insertRecord(form)
  }
    else
    {
      this.updateRecord(form);
    }
    this.service.refreshlist();
  }
  
  insertRecord(form:NgForm){
    this.service.postDoctorDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.success('Addded Successfully ','Doctor List')
      },
      err =>{ console.log(err); }
    );
  }
  
  updateRecord(form:NgForm){
    this.service.putDoctorDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshlist();
        this.toastr.info('Updated Successfully','Doctor List')
      },
      err =>{ console.log(err); }
    );
  }
  
resetForm(form:NgForm)
{
  form.form.reset();
  this.service.formData = new DoctorDetail();
}
  
  }