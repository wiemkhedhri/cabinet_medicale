import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addsecretaire',
  templateUrl: './addsecretaire.component.html',
  styleUrls: ['./addsecretaire.component.css']
})
export class AddsecretaireComponent implements OnInit {
form:FormGroup ;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomprenom:['',Validators.required] ,
      sexe:['',Validators.required],
      datenaissance:['',Validators.required],
      etatsociale:['',Validators.required] ,
      numtel:['',Validators.required],
      adresse:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      photo:['',Validators.required] ,
      niveauetudes:['',Validators.required]



  })
}

}
