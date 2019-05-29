import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-projects',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator" [ngClass]="{'dark-navigator':darkMode}">
      <div class="row">
        <app-project [project]="currentDisplay"></app-project>
      </div>
      <button [disabled]="current === 0" class="prev" [ngClass]="{'dark-prev':darkMode}"
      (click)="prev()"><i class="fas fa-chevron-up"></i></button>
      <button [disabled]="current === projects.length - 1" class="next" [ngClass]="{'dark-next':darkMode}"
      (click)="next()"><i class="fas fa-chevron-down"></i></button>
      <div class="nav-circles">
        <div class="item">
        <div class="circle"  [ngClass]="{'active': inViewProject === currentDisplay,
          'dark-circle':darkMode }" (click)="onNavChange()" ></div>
        <div class="date">{{ inViewProject.tech }}</div></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = [{
    name: 'Lakshmipat Singhania Academy',
    org: 'Kolkata',
    date: 'APRIL 2003 - MAY 2017',
    tech: 'NODE.JS',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  }];

  currentDisplay: { name: string, tech: string, org: string, date: string, description: string };
  inViewProject: { name: string, tech: string, org: string, date: string, description: string };
  current: number;
  darkMode: boolean;
  subscription: any;
  constructor(private darkModeService: DarkmodeService) {
    this.darkMode = darkModeService.getMode();
    this.subscription = darkModeService.modeChange.subscribe((value) => {
      this.darkMode = value;
    });
    this.darkModeService = darkModeService;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.currentDisplay = this.projects[0];
    this.inViewProject = this.projects[0];
    this.current = 0;
  }
  onNavChange() {
    this.currentDisplay = this.projects[this.current];
  }
  next() {
    if (this.current + 1 > this.projects.length) {

    } else {
      this.current = this.current + 1;
      this.inViewProject = this.projects[this.current];
    }
  }
  prev() {
    if (this.current - 1 < 0) {

    } else {
      this.current = this.current - 1;
      this.inViewProject = this.projects[this.current];
    }
  }
}
