import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-educations',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator" [ngClass]="{'dark-navigator':darkMode}">
      <div class="row" (dragstart)="dragStart($event)" (dragend)="dragEnd($event)">
        <app-education [education]="currentDisplay"></app-education>
      </div>
      <button [disabled]="current === 0" class="prev" [ngClass]="{'dark-prev':darkMode}"
      (click)="prev()"><i class="fas fa-chevron-up"></i></button>
      <button [disabled]="current === educations.length - 1" class="next" [ngClass]="{'dark-next':darkMode}"
      (click)="next()"><i class="fas fa-chevron-down"></i></button>
      <div class="nav-circles" (dragstart)="navDragStart($event)" (dragend)="navDragEnd($event)">
        <div class="item" (click)="onNavChange()">
          <div class="circle" [ngClass]="{'active': inViewEducation === currentDisplay,
            'dark-circle':darkMode }"></div>
          <div class="date">{{ inViewEducation.date }}</div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit, OnDestroy {
  educations = [{
    name: 'Singhania Academy',
    place: 'Kolkata',
    date: 'APRIL 2003 - MAY 2017',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  }, {
    name: 'Lakns Singhania Academy',
    place: 'Kolkata',
    date: 'APRIL 2003 - MAY 2017',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  }];
  currentDisplay: { name: string, place: string, date: string, description: string };
  inViewEducation: { name: string, place: string, date: string, description: string };
  darkMode: boolean;
  navPrevLocation: {x: number, y: number};
  prevLocation: { x: number, y: number };
  subscription: any;
  current: number;
  constructor(private darkModeService: DarkmodeService) {
    this.darkMode = this.darkModeService.getMode();
    this.subscription = this.darkModeService.modeChange.subscribe((value) => {
      this.darkMode = value;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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
      this.currentDisplay = this.educations[this.current];
      this.inViewEducation = this.educations[this.current];
    } else if (event.clientX - this.prevLocation.x < -50) {
      this.current = this.current - 1;
      this.currentDisplay = this.educations[this.current];
      this.inViewEducation = this.educations[this.current];
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
      this.inViewEducation = this.educations[this.current];
    } else if (event.clientX - this.navPrevLocation.x < -25 || event.clientY - this.navPrevLocation.y < -25) {
      this.current = this.current - 1;
      this.inViewEducation = this.educations[this.current];
    }
  }
  ngOnInit() {
    this.currentDisplay = this.educations[0];
    this.inViewEducation = this.educations[0];
    this.current = 0;
  }
  onNavChange() {
    this.currentDisplay = this.educations[this.current];
  }
  next() {
    if (this.current + 1 > this.educations.length) {

    } else {
      this.current = this.current + 1;
      this.inViewEducation = this.educations[this.current];
    }
  }
  prev() {
    if (this.current - 1 < 0) {

    } else {
      this.current = this.current - 1;
      this.inViewEducation = this.educations[this.current];
    }
  }
}
