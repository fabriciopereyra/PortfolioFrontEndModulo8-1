import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienceFormComponent } from './components/main/experience/new-experience-form/new-experience-form.component';
import { UpdateExperienceFormComponent } from './components/main/experience/update-experience-form/update-experience-form.component';
import { NewEducationFormComponent } from './components/main/education/new-education-form/new-education-form.component';
import { UpdateEducationFormComponent } from './components/main/education/update-education-form/update-education-form.component';
import { NewProjectFormComponent } from './components/main/project/new-project-form/new-project-form.component';
import { UpdateProjectFormComponent } from './components/main/project/update-project-form/update-project-form.component';
import { NewSkillFormComponent } from './components/main/skill/new-skill-form/new-skill-form.component';
import { UpdateSkillFormComponent } from './components/main/skill/update-skill-form/update-skill-form.component';
import { UpdateHeroFormComponent } from './components/main/hero/update-hero-form/update-hero-form.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newExperienceForm', component: NewExperienceFormComponent},
  {path:'updateExperienceForm/:id', component: UpdateExperienceFormComponent},
  {path:'newEducationForm', component: NewEducationFormComponent},
  {path:'updateEducationForm/:id', component: UpdateEducationFormComponent},
  {path:'newProjectForm', component: NewProjectFormComponent},
  {path:'updateProjectForm/:id', component: UpdateProjectFormComponent},
  {path:'newSkillForm', component: NewSkillFormComponent},
  {path:'updateSkillForm/:id', component: UpdateSkillFormComponent},
  {path:'updateHeroForm/:id', component: UpdateHeroFormComponent},
  {path:'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
