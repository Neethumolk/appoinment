import { Injectable } from '@angular/core';
import { PatientDetail } from './patient-detail.model';
import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {

  constructor(private http:HttpClient, private router:Router) { }
formData:PatientDetail = new PatientDetail();
readonly baseUrl = 'http://localhost:56639/api/PatientDetail'

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

/*login(user:any)
{
  return this.http.post(this.baseUrl, user)
  .pipe(map(response => {
   // this.router.navigate([Url]);
    return response;
    }))
    .pipe(catchError((error, caught) => {
      return of(error);
}) as any);

}*/
}

