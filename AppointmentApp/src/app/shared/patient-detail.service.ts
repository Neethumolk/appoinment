import { Injectable } from '@angular/core';
import { PatientDetail } from './patient-detail.model';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import {Router} from '@angular/router';
const httpoptions ={
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {

  constructor(private http:HttpClient, private router:Router) { }
formData:PatientDetail = new PatientDetail();
readonly baseUrl = 'http://localhost:56639/api/PatientDetail'
readonly baseURL ='http://localhost:56639/api/PatientDetail/login'
list : PatientDetail[];
userNAME:string;
passWORD:string;

postPatientDetail()
{
  return this.http.post(this.baseUrl, this.formData)

}
refreshlist(
 
)
{
  this.http.get(this.baseUrl)
  .toPromise()
  .then(res=>this.list = res as PatientDetail[]);
}
/*patientLogin(patient: PatientDetail): Observable<PatientDetail>{
  console.log('patient login');
  return this.http.post<PatientDetail>(this.baseUrl,PatientDetail);
}*/

PatientLogin(user:any)
{
  return this.http.post(this.baseURL, user)
  .pipe(map(response => {
   //this.router.navigateByUrl('/bookappointment')
    return response;
    }))
    .pipe(catchError((error, caught) => {
      return of(error);
}) as any);

}
}

