import { Component, OnInit } from '@angular/core';
import { AdminPageService } from '../shared/admin-page.service';
import {DoctorDetail} from '../shared/admin-page.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
//import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {

  constructor(public service : AdminPageService, private router : Router, private toaster:ToastrService) { }
  //public showModal : boolean = false;
 // public searchInput :string ;
//public searchInput1 : string;
  ngOnInit(): void {
    this.service.refreshlist();
    
  }
  
  
  populateForm(selectedRecord:DoctorDetail){
    this.service.formData =Object.assign({},selectedRecord);
  }
  onDelete(id:number)
  {
    if(confirm('Are you sure to delete this record?'))
    {
        this.service.deleteDoctorDetail(id)
        .subscribe(
          res => {
            this.service.refreshlist();
            this.toaster.error("delete successfully",'Doctor Detail')
          },
          err => {console.log(err)}
        )
    }
  }




logOut(){

this.router.navigate(["sign-in"]);


}

 





}
