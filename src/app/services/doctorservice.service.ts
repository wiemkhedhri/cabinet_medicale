import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IDoctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(private http:HttpClient) { }
  login(doctor:any){
    return this.http.post<IDoctor>(`${environment.BasedUrl}/acteur/authentification`,doctor) ;
  }
  getbyid(id:any){
    return this.http.get<IDoctor>(`${environment.BasedUrl}/medecin/findbyid/${id}`) ;
  }
}
