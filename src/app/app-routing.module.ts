import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  { path: '', component: WorksComponent },
  { path: 'education', component: EducationComponent },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
