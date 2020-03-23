import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll() {
    document.body.scrollTop = document.getElementById('about').scrollHeight+50;
    document.documentElement.scrollTop = document.getElementById('about').scrollHeight+50;
  }
}
