import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  template: `
  <div class="col l7 offset-l4 m8 offset-m2 s10 offset-s1 exp">
    <div class="company">{{ project.name }} {{ project.org }} </div>
    <div class="date">{{ project.date }}</div>
    <div class="description">{{ project.description }}</div>
  </div>
  `,
  styles: [`
  .company{
      margin:10px;
      margin-top:20px;
      font-weight: bold;
      font-size: 17px;
  }
  .date{
      margin-bottom:30px;
      margin-left:10px;
      font-weight: bold;
      font-size: 12px;
  }
  .description{
      padding: 10px;
      text-align: justify;
      text-justify: inter-word;
      font-size:13px;
  }
  .exp{
      margin:20px;
  }
  `]
})
export class ProjectComponent implements OnInit {
  @Input() project: {name: string, org: string, date: string, tech: string, description: string };
  constructor() { }

  ngOnInit() {
  }

}
