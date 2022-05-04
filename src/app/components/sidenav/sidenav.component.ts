import { DoctorserviceService } from './../../services/doctorservice.service';
import { IDoctor } from 'src/app/models/doctor';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
currentuser:IDoctor ;
currentUserItem=localStorage.getItem('currentuser') ;
doctor:IDoctor ;
  constructor(private doctorservice:DoctorserviceService) { }

  ngOnInit(): void {
    this.currentuser = this.currentUserItem!=null? JSON.parse(this.currentUserItem) : null ;
    this.getbyid() ;
  }
getbyid(){
  this.doctorservice.getbyid(this.currentuser.id).subscribe((data)=>{
    this.doctor = data ;
  })

}
}
