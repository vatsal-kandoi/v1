import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-skills',
  template: `
  <div class="">
    <div class="row skills-div">
      <div class="col s6" *ngFor="let skill of skills" [ngClass]="{'skills-div-dark':darkMode}">
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
    .skills-div-dark{
      color:white;
    }
    `
  ]
})
export class SkillsComponent {
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
     this.darkModeService = darkModeService;
     this.darkMode = this.darkModeService.getMode();
     this.subscription = darkModeService.modeChange.subscribe((value) => {
       this.darkMode = value;
     });
   }
   changeMode() {
     this.darkModeService.toggleMode();
   }
 // tslint:disable-next-line: use-life-cycle-interface
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

}
