import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educations',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator">
      <div class="row" *ngFor="let education of educations">
        <app-education [education]="education"></app-education>
      </div>
      <div class="nav-circles" *ngFor="let education of educations">
        <div class="item"><div class="circle active"></div><div class="date">{{ education.date }}</div></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  educations = [{
    name: 'Lakshmipat Singhania Academy',
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
