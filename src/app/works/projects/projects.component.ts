import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interface/project';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private data: DataService) {
    this.projects = data.getProjects();
  }
  projects: Project[];
  ngOnInit(): void {
  }

}
