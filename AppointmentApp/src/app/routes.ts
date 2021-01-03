import  {Routes} from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DoctorDetailFormComponent } from './admin-page/doctor-detail-form/doctor-detail-form.component';
import { BookappointmentDetailComponent } from './bookappointment-detail/bookappointment-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './patient-details/log-in/log-in.component';
import { PatientDetailFormComponent } from './patient-details/patient-detail-form/patient-detail-form.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import {SignInComponent} from './patient-details/sign-in/sign-in.component';
export const appRoutes : Routes = [
{
    path : 'home' , component : HomePageComponent
},
{
    path : 'bookappointment' , component : BookappointmentDetailComponent
},
{
    path : 'patientdetailregister' , component : PatientDetailsComponent , children : [{
        path: '', component:PatientDetailFormComponent
    }]
},
{
    path : 'doctordetailregister' , component :AdminPageComponent , children : [{
        path: '', component:DoctorDetailFormComponent
    }]
}
,
{
    path : 'login' , component : PatientDetailsComponent , children : [{
        path: '', component:LogInComponent
    }]
},
{
    path : 'signin' , component : PatientDetailsComponent , children : [{
        path: '', component:SignInComponent
    }]
},
{
    path:'',redirectTo:'/signin',pathMatch:'full'
}

];