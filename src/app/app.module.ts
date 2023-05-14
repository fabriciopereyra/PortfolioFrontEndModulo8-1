import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SocialComponent } from './components/main/social/social.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { AboutmeComponent } from './components/main/aboutme/aboutme.component';
import { ExperienceComponent } from './components/main/experience/experience.component';
import { EducationComponent } from './components/main/education/education.component';
import { SkillComponent } from './components/main/skill/skill.component';
import { ProjectComponent } from './components/main/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { ModalComponent } from './components/header/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { NewExperienceFormComponent } from './components/main/experience/new-experience-form/new-experience-form.component';
import { UpdateExperienceFormComponent } from './components/main/experience/update-experience-form/update-experience-form.component';
import { NewEducationFormComponent } from './components/main/education/new-education-form/new-education-form.component';
import { UpdateEducationFormComponent } from './components/main/education/update-education-form/update-education-form.component';
import { NewProjectFormComponent } from './components/main/project/new-project-form/new-project-form.component';
import { UpdateProjectFormComponent } from './components/main/project/update-project-form/update-project-form.component';
import { NewSkillFormComponent } from './components/main/skill/new-skill-form/new-skill-form.component';
import { UpdateSkillFormComponent } from './components/main/skill/update-skill-form/update-skill-form.component';
import { UpdateHeroFormComponent } from './components/main/hero/update-hero-form/update-hero-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SocialComponent,
    HeroComponent,
    AboutmeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    NewExperienceFormComponent,
    UpdateExperienceFormComponent,
    NewEducationFormComponent,
    UpdateEducationFormComponent,
    NewProjectFormComponent,
    UpdateProjectFormComponent,
    NewSkillFormComponent,
    UpdateSkillFormComponent,
    UpdateHeroFormComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalComponent,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [InterceptorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
