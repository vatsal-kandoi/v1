import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-educations',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator" [ngClass]="{'navigator-dark':darkMode}">
      <div class="row">
        <app-education [education]="currentDisplay"></app-education>
      </div>
      <div class="nav-circles">
        <div class="item" *ngFor="let education of educations">
          <div class="circle" [ngClass]="{active: education === currentDisplay }" (click)="onNavChange(education)"></div>
          <div class="date">{{ education.date }}</div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
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
  darkMode: boolean;
  subscription: any;

  constructor(private darkModeService: DarkmodeService) {
    this.darkModeService = darkModeService;
    this.darkMode = this.darkModeService.getMode();
    this.subscription = darkModeService.modeChange.subscribe((value) => {
      this.darkMode = value;
    });
  }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.currentDisplay = this.educations[0];
  }
  onNavChange(data: { name: string, place: string, date: string, description: string }) {
    this.currentDisplay = data;
  }

}
