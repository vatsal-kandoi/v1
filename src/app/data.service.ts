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
      info: 'Crio Launch is a program by Crio.Do that teaches developers about the basics of Linux, shell scripting, file systems and Java programming. I was a part of this program and successfully completed the given milestones'
    },
    {
      company: 'VIT Linux Users Group',
      position: 'Co-founder',
      date: '03/2020 - 04/2020',
      info: 'VIT Linux Users Group is a club which teaches the basics concepts behind linux to linux ehtusiasts, and encouragees people to contribute to open source.'
    },
    {
      company: 'Team UAV',
      position: 'Avionics Head',
      date: '03/2020 - 04/2020',
      info: 'Team UAV is a part of Creation Labs, a makerspace in VIT University, Vellore. I am responsible for the avionics division, comprising of both software, and hardware aspects of an autonomous unmanned aerial vehicle '
    },
    {
      company: 'ACM VIT',
      position: 'Web Developer',
      date: '03/2020 - 04/2020',
      info: 'ACM VIT Student Chapter is the official chapter for ACM in VIT University, Vellore. I was part of the web department, focusing mainly on backend developement using Node.js'
    },
    {
      company: 'Team UAV',
      position: 'Avionics Division',
      date: '03/2020 - 04/2020',
      info: 'Team UAV is a part of Creation Labs, a makerspace in VIT University, Vellore. I was a part of the avionics division, and responsible for creating software and hardware solutions for the existing projects of our team.'
    },
  ];
  private educations: Education[] = [
    {
      date: 'July 2017 - Present',
      name: 'Vellore Institute of Technology',
      city: 'Vellore',
      info: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quos! Laborum molestias iure rerum architecto beatae tempora quidem ex tenetur asperiores, repudiandae, itaque accusamus dolorum dolor ab voluptas tempore optio.',
      degree: 'Electronics and Communication Engineering'
    },
    {
      date: 'July 2017 - Present',
      name: 'Lakshmipat Singhania Academy, Kolkata',
      city: 'Kolkata',
      info: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quos! Laborum molestias iure rerum architecto beatae tempora quidem ex tenetur asperiores, repudiandae, itaque accusamus dolorum dolor ab voluptas tempore optio.',
      degree: 'Higher Secondary'
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
