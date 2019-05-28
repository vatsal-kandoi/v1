import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-projects',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator" [ngClass]="{'navigator-dark':darkMode}" >
      <div class="row">
        <app-project [project]="currentDisplay"></app-project>
      </div>
      <div class="prev"><i class="fas fa-chevron-up"></i></div>
      <div class="next"><i class="fas fa-chevron-down"></i></div>
      <div class="nav-circles">
        <div class="item" *ngFor="let project of projects">
        <div class="circle"  [ngClass]="{active: project === currentDisplay }" (click)="onNavChange(project)" ></div>
        <div class="date">{{ project.tech }}</div></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [{
    name: 'Lakshmipat Singhania Academy',
    org: 'Kolkata',
    date: 'APRIL 2003 - MAY 2017',
    tech: 'NODE.JS',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  }];
  darkMode: boolean;
  subscription: any;
  currentDisplay: { name: string, tech: string, org: string, date: string, description: string };
  ngOnInit() {
    this.currentDisplay = this.projects[0];
  }
  constructor(private darkModeService: DarkmodeService) {
    this.darkModeService = darkModeService;
    this.darkMode = this.darkModeService.getMode();
    this.subscription = darkModeService.modeChange.subscribe((value) => {
      this.darkMode = value;
    });
  }
  changeMode() {
    this.darkModeService.toggleMode();
  }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onNavChange(data: { name: string, tech: string, org: string, date: string, description: string }) {
    this.currentDisplay = data;
  }
}
