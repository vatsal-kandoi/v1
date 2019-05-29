import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
  <div class="col l7 offset-l4 m7 offset-m4 s12 exp">
    <div class="company">{{ education.school }} | {{ education.place }}</div>
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
    @media only screen and (max-width:600px){
      .exp{
        padding-bottom:100px;
      }
    }
    @media only screen and (max-width:500px){
      .exp{
        padding-bottom:50px;
      }
      .company{
        font-size:15px;
      }
      .date{
        font-size:12px;
      }
      .description{
        font-size:12px;
      }
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
