import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
  <div class="row fullHeight noPadding">
    <div class="fullHeight col s12 navigator">
      <div class="row">
        <app-project></app-project>
      </div>
      <div class="prev"><i class="fas fa-chevron-up"></i></div>
      <div class="next"><i class="fas fa-chevron-down"></i></div>
      <div class="nav-circles" *ngFor="let project of projects">
        <div class="item"><div class="circle active"></div><div class="date">{{ project.tech }}</div></div>
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

  constructor() { }

  ngOnInit() {
  }

}
