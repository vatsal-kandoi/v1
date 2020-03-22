import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) 
  doSomething(event) {
    if (window.scrollY < 100) {
      this.shadow = false;
    } else{
      this.shadow = true
    }
  }

  shadow: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.shadow = false
  }

}
