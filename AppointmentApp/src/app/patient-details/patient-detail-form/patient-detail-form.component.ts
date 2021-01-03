import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientDetail } from 'src/app/shared/patient-detail.model';
import { PatientDetailService } from 'src/app/shared/patient-detail.service';

@Component({
  selector: 'app-patient-detail-form',
  templateUrl: './patient-detail-form.component.html',
  styles: [
  ]
})
export class PatientDetailFormComponent implements OnInit {

  constructor(public service:PatientDetailService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
onSubmit(form:NgForm)
{
this.service.postPatientDetail().subscribe(
  res => {  
 
  },
  err => {console.log(err)}
);
this.toastr.success('Submitted Successfully','Patient detail register');
this.resetForm(form);
}
resetForm(form:NgForm)
{
  form.form.reset();
  this.service.formData = new PatientDetail();
}
}
