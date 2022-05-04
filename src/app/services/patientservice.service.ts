import { Ipatient } from './../models/patients';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }
  findallpatient(id:any){
    return this.http.get<Ipatient[]>(`${environment.BasedUrl}/patient/findall/${id}`) ;
  }
  getbyid(id:any){
    return this.http.get<Ipatient>(`${environment.BasedUrl}/patient/findbyid/${id}`)
  }
}
