import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  login(acteur:any){
    return this.http.post(`${environment.BasedUrl}/acteur/authentification`,acteur)
  }
}
