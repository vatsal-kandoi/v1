import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  private darkMode: boolean;
  modeChange: Subject < boolean > = new Subject<boolean>();
  constructor() {
    this.darkMode = false;
  }
  getMode() {
    return this.darkMode;
  }
  toggle() {
    this.darkMode = !this.darkMode;
    this.modeChange.next(this.darkMode);
  }
}
