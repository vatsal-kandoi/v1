import { Component, OnInit } from '@angular/core';
import { Awards } from 'src/app/interface/awards';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor(private data: DataService) {
    this.awards = data.getAwards();
  }
  awards: Awards[];
  ngOnInit(): void {
  }

}
