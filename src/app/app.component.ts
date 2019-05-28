import { Component, OnDestroy } from '@angular/core';
import { DarkmodeService } from './shared/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkMode: boolean;
  subscription: any;
  constructor(private darkModeService: DarkmodeService) {
    this.darkModeService = darkModeService;
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
