import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/interface/work';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private data: DataService) {
    this.experiences = data.getWorks();
  }
  experiences: Work[];
  ngOnInit(): void {
  }

}
