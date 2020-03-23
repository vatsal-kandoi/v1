import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  { path: '', component: WorksComponent },
  { path: 'education', component: HistoryComponent },
  { path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
