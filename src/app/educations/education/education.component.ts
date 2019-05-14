import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
  <div class="col l7 offset-l4 m8 offset-m2 s10 offset-s1 exp">
    <div class="company">{{ education.name }} | {{ education.place }}</div>
    <div class="date">{{ education.date }}</div>
    <div class="description">{{ education.description }}</div>
  </div>
  `,
  styles: [
    `
    .company{
        margin:10px;
        margin-top:20px;
        font-weight: bold;
        font-size: 20px;
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
    `
  ]
})
export class EducationComponent implements OnInit {
  @Input() education: {school: string, place: string, date: string, description: string };
  constructor() { }
  ngOnInit() {
  }

}
