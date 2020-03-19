import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './works/landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { WorkComponent } from './works/work/work.component';
import { OrganisationsComponent } from './works/organisations/organisations.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let appRoutes: Routes = [
  { path: '', component: WorksComponent },
  { path: '/projects',
    pathMatch: 'full',
    component: ProjectsComponent
  },
  { path: '/education',
    pathMatch: 'full',
    component: EducationComponent
  },
  { path: '/skills',
    pathMatch: 'full',
    component: SkillsComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    FooterComponent,
    WorksComponent,
    WorkComponent,
    OrganisationsComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
