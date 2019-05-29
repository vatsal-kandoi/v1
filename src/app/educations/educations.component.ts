import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-educations',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator" [ngClass]="{'dark-navigator':darkMode}">
      <div class="row">
        <app-education [education]="currentDisplay"></app-education>
      </div>
      <button [disabled]="current === 0" class="prev" [ngClass]="{'dark-prev':darkMode}"
      (click)="prev()"><i class="fas fa-chevron-up"></i></button>
      <button [disabled]="current === educations.length - 1" class="next" [ngClass]="{'dark-next':darkMode}"
      (click)="next()"><i class="fas fa-chevron-down"></i></button>
      <div class="nav-circles">
        <div class="item">
          <div class="circle" [ngClass]="{'active': inViewEducation === currentDisplay,
            'dark-circle':darkMode }" (click)="onNavChange()"></div>
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
  subscription: any;
  current: number;
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
