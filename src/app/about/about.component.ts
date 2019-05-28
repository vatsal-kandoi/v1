import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../shared/darkmode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  darkMode: boolean;
  subscription: any;

  constructor(private darkModeService: DarkmodeService) {
    this.darkModeService = darkModeService;
    this.darkMode = this.darkModeService.getMode();
    this.subscription = darkModeService.modeChange.subscribe((value) => {
      this.darkMode = value;
    });
  }
  ngOnInit() {

  }
// tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
