import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilesettingComponent } from './components/profilesetting/profilesetting.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { LoginComponent } from './components/login/login.component';
import { AddsecretaireComponent } from './components/addsecretaire/addsecretaire.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListpatientComponent } from './components/listpatient/listpatient.component';
import { RdvtodayComponent } from './components/rdvtoday/rdvtoday.component';
import { PourcentageComponent } from './components/pourcentage/pourcentage.component';
import { Acceuil1Component } from './components/acceuil1/acceuil1.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { RendezvousComponent } from './components/rendezvous/rendezvous.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidenavComponent,
    FooterComponent,
    ProfilesettingComponent,
    ChangepasswordComponent,
    LoginComponent,
    AddsecretaireComponent,
    ListpatientComponent,
    RdvtodayComponent,
    PourcentageComponent,
    Acceuil1Component,
    DetailsComponent,
    RendezvousComponent ,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule ,
    FormsModule ,
    HttpClientModule ,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
