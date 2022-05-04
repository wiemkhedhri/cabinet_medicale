import { Router } from '@angular/router';
import { DoctorserviceService } from './../../services/doctorservice.service';
import { Component, OnInit } from '@angular/core';
import { IDoctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentuser:IDoctor ;
  currentUserItem=localStorage.getItem('currentuser') ;
  doctor:IDoctor ;
  constructor(private doctorservice:DoctorserviceService , private router : Router) { }

  ngOnInit(): void {
    this.currentuser = this.currentUserItem!=null? JSON.parse(this.currentUserItem) : null ;
    this.getbyid() ;
  }
  getbyid(){
    this.doctorservice.getbyid(this.currentuser.id).subscribe((data)=>{
      this.doctor = data ;
    })
}
logout() {
  //remove user from localStorage
  localStorage.removeItem('currentuser');

  localStorage.removeItem('status')
  console.log(  "stauts:",localStorage.getItem('status'))
  console.log("after logout : ",localStorage.getItem('currentuser'))

  this.router.navigateByUrl('');


}
 }
