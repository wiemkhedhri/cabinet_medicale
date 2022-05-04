import { IDoctor } from 'src/app/models/doctor';
import { Ipatient } from './patients';
export interface IDossierMedicale {
  numdossier:number ;
  nompatient :String   ;
  prenompatient :String ;
  dossierpatient : Ipatient ;
  MedDossier: IDoctor ;
}
