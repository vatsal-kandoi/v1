import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/interface/education';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private data: DataService) {
    this.educations = data.getEducation();
  }
  educations : Education[];
  ngOnInit(): void {
  }

}
