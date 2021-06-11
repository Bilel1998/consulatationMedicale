import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualitesComponent } from './actualites/actualites.component';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LesQuestionsComponent } from './les-questions/les-questions.component';
import { LoginComponent } from './login/login.component';
import { MesQuestionsComponent } from './mes-questions/mes-questions.component';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';
import { ProfilComponent } from './profil/profil.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ { path: '', component: HomeComponent },
{path:'service',component: ServiceComponent},
{path:'contact', component: ContactComponent},
{path:'actualite',component: ActualitesComponent},
{path:'profil',component: ProfilComponent},
{path:'mesQuestions',component: MesQuestionsComponent}, 
{path:'addActualite',component: AddActualiteComponent},
{path:'profilMedecin',component: ProfilMedecinComponent},
{path:'lesQuestions',component: LesQuestionsComponent}, 
{path:'admin',component: AdminComponent}, 

{path:'signup',component: SignupComponent},
{path:'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
