import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private data: DataService) {
    this.skills = data.getSkills();
  }
  skills: string[];
  ngOnInit(): void {
  }

}
