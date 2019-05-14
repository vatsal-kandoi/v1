import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  template: `
    <div class="skill">
      <div class="skill-icon"><i class="fab fa-{{ skill.link }} fa-2x"></i></div><div class="skill-name">{{ skill.name }}</div>
    </div>
  `,
  styles: [
    `
      .skill{
        display:flex;
        flex-direction:row;
      }
      .skill-icon{
        margin-right:5px;
        padding:10px;
      }
      .skill-name{
        padding:15px;
        font-weight:bold;
        font-size:14px;
      }
      .skill:hover{
        color:#FA292A
      }
    `
  ]
})
export class SkillComponent implements OnInit {
  @Input() skill: { link: string, name: string };
  constructor() { }

  ngOnInit() {
  }

}
