import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientserviceService } from './../../services/patientservice.service';
import { Ipatient } from './../../models/patients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css']
})
export class ListpatientComponent implements OnInit {
listpatient:Ipatient[]  ;
currentuser:Ipatient ;
AddForm:FormGroup
currentuseItem=localStorage.getItem('currentuser')  ;
  constructor(private patientservice:PatientserviceService ,private fb :FormBuilder) { }

  ngOnInit(): void {
    this.currentuser = this.currentuseItem !=null? JSON.parse(this.currentuseItem) : null;
    this.getallpatient() ;
    this.AddForm = this.fb.group( {
      nomprenom:[''] ,
      datenaissance:[''],
      sexe:[''] ,
      email:[''] ,
      numtel:[''] ,
      aboutme  :[''] ,
      adresse :[''] ,
      etatsociale:[''] ,
  } )}
getallpatient(){

console.log("hereid",this.currentuser.id)
this.patientservice.findallpatient(this.currentuser.id).subscribe((data)=>{
  this.listpatient=data ;

})
}


}
