import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-skills',
  template: `
  <div class="">
    <div class="row skills-div" [ngClass]="{'dark-skill':darkMode}">
      <div class="col l6 m6 s12 flex" *ngFor="let skill of skills">
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
    .dark-skill{
      color:white;
    }
    @media only screen and (max-width: 600px){
      .flex{
        display:flex;
        justify-content:center;
      }
    }
    `
  ]
})
export class SkillsComponent implements OnInit, OnDestroy {
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
   darkMode: boolean;
   subscription: any;
   constructor(private darkModeService: DarkmodeService) {
     this.darkMode = darkModeService.getMode();
     this.subscription = darkModeService.modeChange.subscribe((value) => {
       this.darkMode = value;
     });
     this.darkModeService = darkModeService;
   }
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

  ngOnInit() {
  }

}
