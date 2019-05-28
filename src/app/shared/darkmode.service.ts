import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  private darkMode: boolean;
  modeChange: Subject<boolean> = new Subject<false>();
  constructor() {
    this.darkMode = false;
  }
  toggleMode() {
    this.darkMode = !this.darkMode;
    this.modeChange.next(this.darkMode);
  }
  getMode() {
    return this.darkMode;
  }
}
