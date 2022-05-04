import { RendezvousComponent } from './components/rendezvous/rendezvous.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { Acceuil1Component } from './components/acceuil1/acceuil1.component';
import { RdvtodayComponent } from './components/rdvtoday/rdvtoday.component';
import { ListpatientComponent } from './components/listpatient/listpatient.component';
import { AddsecretaireComponent } from './components/addsecretaire/addsecretaire.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesettingComponent } from './components/profilesetting/profilesetting.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
   {path:'',component:Acceuil1Component} ,
    {path:'profilsetting',component:ProfilesettingComponent} ,
    {path:'changepassword',component:ChangepasswordComponent} ,
{path:'details/:id',component:DetailsComponent} ,
    {path:'listpatient',component:ListpatientComponent}
  ]
} ,
{path:'addsecretaire',component:AddsecretaireComponent} ,
 {path:'',component:LoginComponent},
 {path:'rendezvous',component:RendezvousComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
