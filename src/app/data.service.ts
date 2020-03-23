import { Injectable } from '@angular/core';
import { Work } from './interface/work';
import { Education } from './interface/education';
import { Project } from './interface/project';
import { Awards } from './interface/awards';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private works: Work[] = [
    {
      company: 'Crio Launch',
      position: 'Developer',
      date: '03/2020 - 04/2020',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid nobis sequi fugiat soluta officiis beatae sunt harum alias aperiam, ullam molestiae aut iste maiores dolorum animi eveniet quis voluptate.'
    },
    {
      company: 'Crio Launch',
      position: 'Developer',
      date: '03/2020 - 04/2020',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid nobis sequi fugiat soluta officiis beatae sunt harum alias aperiam, ullam molestiae aut iste maiores dolorum animi eveniet quis voluptate.'
    },
    {
      company: 'Crio Launch',
      position: 'Developer',
      date: '03/2020 - 04/2020',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid nobis sequi fugiat soluta officiis beatae sunt harum alias aperiam, ullam molestiae aut iste maiores dolorum animi eveniet quis voluptate.'
    },
    {
      company: 'Crio Launch',
      position: 'Developer',
      date: '03/2020 - 04/2020',
      info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquid nobis sequi fugiat soluta officiis beatae sunt harum alias aperiam, ullam molestiae aut iste maiores dolorum animi eveniet quis voluptate.'
    }
  ];
  private educations: Education[] = [
    {
      date: 'July 2017 - Present',
      name: 'Vellore Institute of Technology',
      city: 'Vellore',
      info: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quos! Laborum molestias iure rerum architecto beatae tempora quidem ex tenetur asperiores, repudiandae, itaque accusamus dolorum dolor ab voluptas tempore optio.',
      degree: 'Electronics and Communication Engineering'
    }
  ];
  private skills: string[] = [
    "JavaScript",
    "Python",
    "Node.js",
    "MongoDB",
    "C",
    "SQL",
    "Angular",
    "Raspberry Pi",
    "Arduino",
    "Unmanned Aerial Vehicles",
    "Aviation Systems"
  ];
  private projects: Project[] = [
    {
      date: 'March 2020',
      name: 'Viking',
      for: 'Team UAV',
      about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae architecto nemo',
      code: '',
      brochure: ''
    }
  ];
  private awards: Awards[] = [
    {
      date: 'March 2020',
      name: 'Viking',
      for: 'Team UAV',
      about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta beatae architecto nemo',
      code: '',
      brochure: ''
    }
  ]
  constructor() { }
  getAwards(): Awards[] {
    return this.awards
  }
  getProjects(): Project[] {
    return this.projects
  }
  getSkills(): string[] {
    return this.skills
  }
  getWorks(): Work[] {
    return this.works
  }
  getEducation(): Education[] {
    return this.educations
  }
}
