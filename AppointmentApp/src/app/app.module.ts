import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDetailFormComponent } from './patient-details/patient-detail-form/patient-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './patient-details/log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DoctorDetailFormComponent } from './admin-page/doctor-detail-form/doctor-detail-form.component';
import { LoginDetailFormComponent } from './patient-details/login-detail-form/login-detail-form.component';
import { SignInComponent } from './patient-details/sign-in/sign-in.component';
import { BookappointmentDetailComponent } from './bookappointment-detail/bookappointment-detail.component';
//import { BookappointmentdetailsComponent } from './bookappointmentdetails/bookappointmentdetails.component';

//import { BookAppointmentDetailFormComponent } from './BookAppointmentDetail/book-appointment-detail-form/book-appointment-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailsComponent,
    PatientDetailFormComponent,
    LogInComponent,
    HomePageComponent,
    AdminPageComponent,
    DoctorDetailFormComponent,
    LoginDetailFormComponent,
    SignInComponent,
    BookappointmentDetailComponent
 
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
