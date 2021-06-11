import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { ConsulEnLigneComponent } from './consul-en-ligne/consul-en-ligne.component';
import { HomeComponent } from './home/home.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ListeActualiteComponent } from './liste-actualite/liste-actualite.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesQuestionsComponent } from './mes-questions/mes-questions.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';
import { LesQuestionsComponent } from './les-questions/les-questions.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderHomeComponent,
    ConsulEnLigneComponent,
    HomeComponent,
    SpecialiteComponent,
    ServiceComponent,
    FooterComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    ActualitesComponent,
    ListeActualiteComponent,
    ProfilComponent,
    MesQuestionsComponent,
    ActualiteComponent,
    AddActualiteComponent,
    ProfilMedecinComponent,
    LesQuestionsComponent,
    AdminComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
