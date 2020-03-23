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
  ToForm() {
    // // document.body.scrollTop = document.getElementById('submit').scrollHeight;
    // console.log(document.getElementById('submit').scrollTop)
    // // document.documentElement.scrollTop = document.getElementById('submit').scrollHeight;
    document.getElementById('submit').scrollIntoView(true)    
  }
  scroll() {
    document.body.scrollTop = document.getElementById('about').scrollHeight+50;
    console.log(document.getElementById('about').scrollHeight)
    document.documentElement.scrollTop = document.getElementById('about').scrollHeight+50;
  }
}
