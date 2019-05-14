import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator">
      <div class="row">
        <app-experience></app-experience>
      </div>
      <div class="nav-circles" *ngFor="let experience of experiences">
        <div class="item"><div class="circle active"></div><div class="date">{{ experience.date }}</div></div>
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
  constructor() { }

  ngOnInit() {
  }

}
