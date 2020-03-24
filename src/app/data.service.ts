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
      date: '03/2020 - Present',
      info: 'Crio Launch is a program by Crio.Do that teaches developers about the basics of Linux, shell scripting, file systems and Java programming. I was a part of this program and successfully completed the given milestones'
    },
    {
      company: 'VIT Linux Users Group',
      position: 'Co-founder',
      date: '08/2019 - Present',
      info: 'VIT Linux Users Group is a club which teaches the basics concepts behind linux to linux ehtusiasts, and encouragees people to contribute to open source.'
    },
    {
      company: 'Team UAV',
      position: 'Avionics Head',
      date: '12/2019 - Present',
      info: 'Team UAV is a part of Creation Labs, a makerspace in VIT University, Vellore. I am responsible for the avionics division, comprising of both software, and hardware aspects of an autonomous unmanned aerial vehicle '
    },
    {
      company: 'ACM VIT',
      position: 'Web Developer',
      date: '12/2017 - 07/2019',
      info: 'ACM VIT Student Chapter is the official chapter for ACM in VIT University, Vellore. I was part of the web department, focusing mainly on backend developement using Node.js'
    },
    {
      company: 'Team UAV',
      position: 'Avionics Division',
      date: '12/2018 - 12/2019',
      info: 'Team UAV is a part of Creation Labs, a makerspace in VIT University, Vellore. I was a part of the avionics division, and responsible for creating software and hardware solutions for the existing projects of our team.'
    },
  ];
  private educations: Education[] = [
    {
      date: 'July 2017 - Present',
      name: 'Vellore Institute of Technology',
      city: 'Vellore',
      info: 'Vellore Institute of Technology (VIT University) is a private higher education institute, and Institution of Eminence, located in Vellore, Tamil Nadu. Founded in 1984, the institution offers 20 undergraduate, 34 postgraduate, four integrated and four research programs.',
      degree: 'Electronics and Communication Engineering'
    },
    {
      date: 'April 2003 - May 2017',
      name: 'Lakshmipat Singhania Academy, Kolkata',
      city: 'Kolkata',
      info: 'Lakshmipat Singhania Academy, Kolkata is a school run by Lakshmipat Singhania Education Foundation, a subsidiary of the J.K. Group. The school was founded in 1996, and offers schooling from pre-schools upto the 12th grade. The school is affiliated to the Central Board of Secondary Education',
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
      about: 'Viking is a fully autonomous unmanned aerial vehicle with a maximum takeoff weight of 33kgs. This was built for the Medical Rescue Challenge, Australia.',
      code: '',
      brochure: ''
    },
    {
      date: 'November 2019',
      name: 'Recruitment Portal-Backend',
      for: 'VITLUG',
      about: 'Recruitment portal for VITLUG where one can login and take a quiz based on the domain selected to be a part of the chapter.',
      code: 'https://github.com/vatsal-kandoi/VITLUG',
      brochure: ''
    },
    {
      date: 'November 2019',
      name: 'Signal Denoising using Particle Swarm Optimisation',
      for: 'Digital Signal Processing Course',
      about: 'A Particle Swarm based approach to obtaining threshold and level values for discrete wavelet transform',
      code: 'https://github.com/vatsal-kandoi/PSO',
      brochure: ''
    },
    {
      date: 'February 2019',
      name: 'ACM Weekend Labs',
      for: 'ACM VIT',
      about: 'It was an initiative taken by ACM VIT Student Chapter to help students hone their technical skills. This was a platform that allowed users to register for a course & attend weekly classes.',
      code: 'https://github.com/vatsal-kandoi/weekend-lab',
      brochure: ''
    },
    {
      date: 'November 2018',
      name: 'Voice Recognition using MATLAB',
      for: 'Signals and Systems Course',
      about: 'A simple notes application using Voice Authorization where users can register using their voice as a password. Voice Authorisation was implemented by using Mel Frequency Coefficient Ceptrum',
      code: 'https://github.com/vatsal-kandoi/Voice-Recognition',
      brochure: ''
    }

  ];
  private awards: Awards[] = [
    {
      date: 'October 2019',
      name: 'DevJams 2019',
      for: 'Best UI/UX and Zeit Prize',
      about: 'My team made a website that filters fake and real reviews of products listed on amazon.com to get the correct rating.',
      code: '',
      brochure: ''
    },
    {
      date: 'September 2019',
      name: 'VitHack',
      for: '1st Prize',
      about: "VitHack is a hackathon organised as a part of the annual tech fest, Gravitas. My team made a chatbot to answer common FAQs regarding HPE Enterprises' product,  HPE Oneview.",
      code: '',
      brochure: ''
    },
    {
      date: 'March 2019',
      name: 'HackGrid 2019',
      for: '2nd Prize',
      about: 'HackGrid is an annual hackathon organised by Apple Developers Group, VIT Unirsity. My team built a web application that helps report crimes dring elections.',
      code: '',
      brochure: ''
    },
    {
      date: 'January 2019',
      name: 'MedTech Challenge',
      for: '1st Prize',
      about: 'My teams pitch for a modular bionic arm got selected for a Rs 50,000 start-up grant by my college.',
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
