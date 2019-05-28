import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experiences',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator">
      <div class="row">
        <app-experience [experience]="currentDisplay"></app-experience>
      </div>
      <div class="nav-circles">
        <div class="item" *ngFor="let experience of experiences">
        <div class="circle" [ngClass]="{active: experience === currentDisplay }" (click)="onNavChange(experience)"></div>
        <div class="date">{{ experience.date }}</div></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  experiences = [{
    company: 'Lakshmipat Singhania Academy',
    place: 'Kolkata',
    date: 'APRIL 2003 - MAY 2017',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsa illo laborum eveniet amet sed in fuga dolores laboriosam,quaerat
    magni molestias sunt deserunt esse ut quam tempora quo, voluptate excepturi.`
  }];
  currentDisplay: { company: string, place: string, date: string, description: string };
  constructor() {
  }

  ngOnInit() {
    this.currentDisplay = this.experiences[0];
  }
  onNavChange(data: { company: string, place: string, date: string, description: string }) {
    this.currentDisplay = data;
  }
}
