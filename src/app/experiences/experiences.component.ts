import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-experiences',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator" [ngClass]="{'dark-navigator':darkMode}">
      <div class="row">
        <app-experience [experience]="currentDisplay"></app-experience>
      </div>
      <button [disabled]="current === 0" class="prev" [ngClass]="{'dark-prev':darkMode}"
      (click)="prev()"><i class="fas fa-chevron-up"></i></button>
      <button [disabled]="current === experiences.length-1" class="next" [ngClass]="{'dark-next':darkMode}"
      (click)="next()"><i class="fas fa-chevron-down"></i></button>
      <div class="nav-circles">
        <div class="item">
        <div class="circle" [ngClass]="{'active': inViewExperience === currentDisplay,
          'dark-circle':darkMode }" (click)="onNavChange(experience)"></div>
        <div class="date">{{ inViewExperience.date }}</div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  experiences = [{
    company: 'Lakshmipat Singhania Academy',
    place: 'Kolkata',
    date: 'APRIL 2003 - MAY 2017',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  },
  {
    company: 'inghania Academy',
    place: 'Kolkata',
    date: 'APRIL 2004 - MAY 2017',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  },
  {
    company: 'Academy',
    place: 'Kolkata',
    date: 'APRIL 2005 - MAY 2017',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  }];
  currentDisplay: { company: string, place: string, date: string, description: string };
  inViewExperience: { company: string, place: string, date: string, description: string };
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
    this.currentDisplay = this.experiences[0];
    this.inViewExperience = this.experiences[0];
    this.current = 0;
  }
  onNavChange() {
    this.currentDisplay = this.currentDisplay = this.experiences[this.current];
  }
  next() {
    if (this.current + 1 > this.experiences.length) {

    } else {
      this.current = this.current + 1;
      this.inViewExperience = this.experiences[this.current];
    }
  }
  prev() {
    if (this.current - 1 < 0) {

    } else {
      this.current = this.current - 1;
      this.inViewExperience = this.experiences[this.current];
    }
  }

}
