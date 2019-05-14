import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
  <div class="conatainer">
    <div class="row skills-div">
      <div class="col s6" *ngFor="let skill of skills">
        <app-skill [skill]="skill"></app-skill>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .skills-div{
      padding:40px;
    }
    `
  ]
})
export class SkillsComponent implements OnInit {
  skills = [ {
    link: 'angular',
    name: 'Angular'
  }, {
    link: 'angular',
    name: 'Angular'
  }, {
    link: 'angular',
    name: 'Angular'
  }, {
    link: 'angular',
    name: 'Angular'
  }, {
    link: 'angular',
    name: 'Angular'
  }, {
    link: 'angular',
    name: 'Angular'
  }, {
    link: 'angular',
    name: 'Angular'
  }, {
    link: 'angular',
    name: 'Angular'
  }
   ];
  constructor() { }

  ngOnInit() {
  }

}
