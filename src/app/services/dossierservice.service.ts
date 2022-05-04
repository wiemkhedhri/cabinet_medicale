import { IDossierMedicale } from './../models/dossiermedicale';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DossierserviceService {

  constructor(private http:HttpClient) { }
  adddossier(idmedecin:any , idpatient:any,dossier){
    return this.http.post<IDossierMedicale>(`${environment.BasedUrl}/dossiermedicale/create/${idmedecin}/${idpatient}`,dossier)
  }
}
