import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-projects',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator" [ngClass]="{'dark-navigator':darkMode}">
      <div class="row" (dragstart)="dragStart($event)" (dragend)="dragEnd($event)">
        <app-project [project]="currentDisplay"></app-project>
      </div>
      <button [disabled]="current === 0" class="prev" [ngClass]="{'dark-prev':darkMode}"
      (click)="prev()"><i class="fas fa-chevron-up"></i></button>
      <button [disabled]="current === projects.length - 1" class="next" [ngClass]="{'dark-next':darkMode}"
      (click)="next()"><i class="fas fa-chevron-down"></i></button>
      <div class="nav-circles" (dragstart)="navDragStart($event)" (dragend)="navDragEnd($event)">
        <div class="item" (click)="onNavChange()">
        <div class="circle" [ngClass]="{'active': inViewProject === currentDisplay,
          'dark-circle':darkMode }"></div>
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
  prevLocation: { x: number, y: number };
  navPrevLocation: {x: number, y: number};
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
  dragStart(event: DragEvent) {
    this.prevLocation = {
      x: event.clientX,
      y: event.clientY
    };
  }
  dragEnd(event: DragEvent) {
    if (event.clientX - this.prevLocation.x > 50) {
      this.current = this.current + 1;
      this.currentDisplay = this.projects[this.current];
      this.inViewProject = this.projects[this.current];
    } else if (event.clientX - this.prevLocation.x < -50) {
      this.current = this.current - 1;
      this.currentDisplay = this.projects[this.current];
      this.inViewProject = this.projects[this.current];
    }
  }
  navDragStart(event: DragEvent) {
    this.navPrevLocation = {
      x: event.clientX,
      y: event.clientY
    };
  }
  navDragEnd(event: DragEvent) {
    if (event.clientX - this.navPrevLocation.x > 25 || event.clientY - this.navPrevLocation.y > 25) {
      this.current = this.current + 1;
      this.inViewProject = this.projects[this.current];
    } else if (event.clientX - this.navPrevLocation.x < -25 || event.clientY - this.navPrevLocation.y < -25) {
      this.current = this.current - 1;
      this.inViewProject = this.projects[this.current];
    }
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
