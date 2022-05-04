import { IDossierMedicale } from './../../models/dossiermedicale';
import { DossierserviceService } from './../../services/dossierservice.service';
import { Ipatient } from './../../models/patients';
import { PatientserviceService } from './../../services/patientservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:String=this.activatedRoute.snapshot.params['id'] ;
  patient:Ipatient ;
  dossier:IDossierMedicale ;
  constructor(private activatedRoute:ActivatedRoute,private patientservice:PatientserviceService,private dossierservice:DossierserviceService) { }

  ngOnInit(): void {
  }
getpatientbyid(){
  this.patientservice.getbyid(this.id).subscribe((data)=>{
this.patient=data ;
  })
}
ajouterdossier(){

}
}
