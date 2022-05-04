import { LoginserviceService } from './../../services/loginservice.service';
import { DoctorserviceService } from './../../services/doctorservice.service';
import { Component, OnInit } from '@angular/core';
import { IDoctor } from 'src/app/models/doctor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
acteur:any ;
FormLogin: FormGroup ;
  constructor(private loginservice:LoginserviceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.FormLogin= this.fb.group({
      email:[''] ,
    password:[''] ,
    })
  }
  login(){
    console.log("login")
    this.loginservice.login(this.FormLogin.value).subscribe((data)=>{
      console.log("acteur :",data)
      this.acteur=data ;
      if(this.acteur.role=='medecin') {
        localStorage.setItem('medecin',JSON.stringify((this.acteur)) );
        localStorage.setItem('status','1') ;
        localStorage.setItem('secretaire',null)
        this.router.navigateByUrl('dashboard')

      }
else
 if (this.acteur.role=='secretaire'){

localStorage.setItem('secretaire',JSON.stringify((this.acteur))) ;
localStorage.setItem('medecin',null) ;
localStorage.setItem('status','1') ;
this.router.navigateByUrl('/dashboard')

}
    })
  }

}
