import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationsComponent } from './educations/educations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

/** Declaring all the routes along with components to be displayed for routing. */
const appRoutes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'educations', component: EducationsComponent},
  { path: 'experiences', component: ExperiencesComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'error', component: ErrorPageComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
