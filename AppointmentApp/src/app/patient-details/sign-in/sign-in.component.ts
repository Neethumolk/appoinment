import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientDetailService } from 'src/app/shared/patient-detail.service';

import { ToastrService } from 'ngx-toastr';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';
//import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public service:PatientDetailService, private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {this.service.refreshlist();
    
  }
  cancel(){
    this.router.navigateByUrl('/')
     }
  onSubmit(form: NgForm){
    if(this.service.userNAME=='admin123' && this.service.passWORD=='admin123'){
      
       this.router.navigateByUrl('/doctordetailregister');
    }
    else {
      for(let ud of this.service.list){
        if(this.service.userNAME == ud.username && this.service.passWORD == ud.password){
          this.toastr.success("Login Success")
           this.router.navigateByUrl('/bookappointment')
        }
      }
      }
      this.resetForm(form);
    }
      resetForm(form:NgForm)
{
  form.form.reset();
  //this.service.formData = new PatientDetail();
}
    

  
  

 
  //onSubmit(form:NgForm)

  //{
  
    
    /*let data = {
      UserName: value.UserName,
       Password :.Password };
   
      
      const resp = await this.api.POST("api/login", data);
    this.service.login(data).subscribe(
res => {},
err => {console.log(err)}
    );
    this.toastr.success('login success');*/
 // }
}

