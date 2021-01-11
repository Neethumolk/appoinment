import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientDetailService } from 'src/app/shared/patient-detail.service';
import {PatientDetail} from 'src/app/shared/patient-detail.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { __values } from 'tslib';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  errorMessage: any;
  loading: boolean;
  //alert:boolean= false;
  public userNAME:any;
  public passWORD:any;

constructor(public service:PatientDetailService, private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {this.service.refreshlist();
    
  }
 
  onSubmit(form:NgForm){
   const Data ={
      userNAME : this.userNAME,
      passWORD: this.passWORD 
    } ;
    if(this.userNAME=='admin123' && this.passWORD=='admin123'){
      
      this.router.navigateByUrl('/doctordetailregister');
   }
   else{

 
    this.service.PatientLogin(Data).subscribe(
      (res:any) => { 
      //  console.log(res.patientId);
        //localStorage.setItem('patientId','');
        this.router.navigateByUrl('/bookappointment');
      this.toastr.success("login succes");
     }, 
      err => {this.toastr.success("Invalid credentials")
        console.log(err)
        this.loading=false;
        this.errorMessage=console.error();
        alert("Invalid username or password");
      this.toastr.success("Invalid credentials")});

      
      }
      this.resetForm(form);
    
 
}
resetForm(form:NgForm)
{
  form.form.reset();
 
}
}