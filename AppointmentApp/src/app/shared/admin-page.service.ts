import { Injectable } from '@angular/core';
import {  DoctorDetail } from './admin-page.model';
import {HttpClient} from '@angular/common/http';
//import { PatientDetail } from './patient-detail.model';


@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  constructor(private http:HttpClient) { }
  formData:DoctorDetail = new DoctorDetail();
  
  readonly baseUrl ='http://localhost:56639/api/DoctorDetail'
  list : DoctorDetail[];
  //readonly baseURL = 'http://localhost:56639/api/DoctorDetail/postdoctordetail'
  //readonly baseURl = 'http://localhost:56639/api/DoctorDetail/getdoctordetail'
  //readonly BaseUrl = 'http://localhost:56639/api/DoctorDetail/{id}'
  
  postDoctorDetail()
  {
    return this.http.post(this.baseUrl,this.formData);
  }
 

putDoctorDetail(){

return this.http.put(`${this.baseUrl}/${this.formData.doctorId}`,this.formData);

}


deleteDoctorDetail(id:number){
return this.http.delete(`${this.baseUrl}/${id}`);

}
refreshlist(){
this.http.get(this.baseUrl)
.toPromise()
.then(res => this.list = res as DoctorDetail[]);
}
}

  


