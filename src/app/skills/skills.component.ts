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
    link: 'node',
    name: 'Node.js'
  }, {
    link: 'python',
    name: 'Python'
  }, {
    link: 'docker',
    name: 'Docker'
  } , {
    link: 'js',
    name: 'JavaScript'
  }, {
    link: 'html5',
    name: 'HTML'
  }, {
    link: 'css3-alt',
    name: 'CSS'
  }
   ];
  constructor() { }

  ngOnInit() {
  }

}
