"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works/works.component */ 9180);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history/history.component */ 3560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: '',
  component: _works_works_component__WEBPACK_IMPORTED_MODULE_0__.WorksComponent
}, {
  path: 'education',
  component: _history_history_component__WEBPACK_IMPORTED_MODULE_1__.HistoryComponent
}, {
  path: '**',
  redirectTo: '/',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 8290);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/footer/footer.component */ 3568);




class AppComponent {
  constructor() {
    this.title = 'portfolio';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 8290);
/* harmony import */ var _works_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./works/landing/landing.component */ 4361);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/footer.component */ 3568);
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./works/works.component */ 9180);
/* harmony import */ var _works_work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./works/work/work.component */ 7837);
/* harmony import */ var _works_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./works/projects/projects.component */ 3047);
/* harmony import */ var _works_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./works/about/about.component */ 9433);
/* harmony import */ var _play_play_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./play/play.component */ 9590);
/* harmony import */ var _works_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./works/skills/skills.component */ 7535);
/* harmony import */ var _history_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./history/achievements/achievements.component */ 8973);
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./history/history.component */ 3560);
/* harmony import */ var _history_education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./history/education/education.component */ 643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7580);
















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_history_education_education_component__WEBPACK_IMPORTED_MODULE_13__.EducationComponent, _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _works_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__.LandingComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _works_works_component__WEBPACK_IMPORTED_MODULE_5__.WorksComponent, _works_work_work_component__WEBPACK_IMPORTED_MODULE_6__.WorkComponent, _works_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__.ProjectsComponent, _works_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent, _play_play_component__WEBPACK_IMPORTED_MODULE_9__.PlayComponent, _works_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__.SkillsComponent, _history_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_11__.AchievementsComponent, _history_history_component__WEBPACK_IMPORTED_MODULE_12__.HistoryComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 5297:
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class DataService {
  constructor() {
    this.works = [{
      company: 'Crio Launch',
      position: 'Developer',
      date: '03/2020 - Present',
      info: 'Crio Launch is a program by Crio.Do that teaches developers about the basics of Linux, shell scripting, file systems and Java programming. I was a part of this program and successfully completed the given milestones'
    }, {
      company: 'VIT Linux Users Group',
      position: 'Co-founder',
      date: '08/2019 - Present',
      info: 'VIT Linux Users Group is a club which teaches the basics concepts behind linux to linux ehtusiasts, and encouragees people to contribute to open source.'
    }, {
      company: 'Team UAV',
      position: 'Avionics Head',
      date: '12/2019 - Present',
      info: 'Team UAV is a part of Creation Labs, a makerspace in VIT University, Vellore. I am responsible for the avionics division, comprising of both software, and hardware aspects of an autonomous unmanned aerial vehicle '
    }, {
      company: 'ACM VIT',
      position: 'Web Developer',
      date: '12/2017 - 07/2019',
      info: 'ACM VIT Student Chapter is the official chapter for ACM in VIT University, Vellore. I was part of the web department, focusing mainly on backend developement using Node.js'
    }, {
      company: 'Team UAV',
      position: 'Avionics Division',
      date: '12/2018 - 12/2019',
      info: 'Team UAV is a part of Creation Labs, a makerspace in VIT University, Vellore. I was a part of the avionics division, and responsible for creating software and hardware solutions for the existing projects of our team.'
    }];
    this.educations = [{
      date: 'July 2017 - Present',
      name: 'Vellore Institute of Technology',
      city: 'Vellore',
      info: 'Vellore Institute of Technology (VIT University) is a private higher education institute, and Institution of Eminence, located in Vellore, Tamil Nadu. I had a wonderful experience here, working on numerous projects, and taking part in loads of competitions, which have helped me grow.',
      degree: 'Electronics and Communication Engineering'
    }, {
      date: 'April 2003 - May 2017',
      name: 'Lakshmipat Singhania Academy, Kolkata',
      city: 'Kolkata',
      info: 'Lakshmipat Singhania Academy, Kolkata is a school run by Lakshmipat Singhania Education Foundation, a subsidiary of the J.K. Group. The school was founded in 1996, and offers schooling from pre-schools upto the 12th grade. This school has played a vital part in moulding me to be a better person.',
      degree: 'Higher Secondary'
    }];
    this.skills = ["JavaScript", "Python", "Node.js", "MongoDB", "C", "SQL", "Angular", "Raspberry Pi", "Arduino", "Unmanned Aerial Vehicles", "Aviation Systems"];
    this.projects = [{
      date: 'March 2020',
      name: 'Viking',
      for: 'Team UAV',
      about: 'Viking is a fully autonomous unmanned aerial vehicle with a maximum takeoff weight of 33kgs. This was built for the Medical Rescue Challenge, Australia.',
      code: '',
      brochure: ''
    }, {
      date: 'November 2019',
      name: 'Recruitment Portal-Backend',
      for: 'VITLUG',
      about: 'Recruitment portal for VITLUG where one can login and take a quiz based on the domain selected to be a part of the chapter.',
      code: 'https://github.com/vatsal-kandoi/VITLUG',
      brochure: ''
    }, {
      date: 'November 2019',
      name: 'Signal Denoising using Particle Swarm Optimisation',
      for: 'Digital Signal Processing Course',
      about: 'A Particle Swarm based approach to obtaining threshold and level values for discrete wavelet transform',
      code: 'https://github.com/vatsal-kandoi/PSO',
      brochure: ''
    }, {
      date: 'February 2019',
      name: 'ACM Weekend Labs',
      for: 'ACM VIT',
      about: 'It was an initiative taken by ACM VIT Student Chapter to help students hone their technical skills. This was a platform that allowed users to register for a course & attend weekly classes.',
      code: 'https://github.com/vatsal-kandoi/weekend-lab',
      brochure: ''
    }, {
      date: 'November 2018',
      name: 'Voice Recognition using MATLAB',
      for: 'Signals and Systems Course',
      about: 'A simple notes application using Voice Authorization where users can register using their voice as a password. Voice Authorisation was implemented by using Mel Frequency Coefficient Ceptrum',
      code: 'https://github.com/vatsal-kandoi/Voice-Recognition',
      brochure: ''
    }];
    this.awards = [{
      date: 'October 2019',
      name: 'DevJams 2019',
      for: 'Best UI/UX and Zeit Prize',
      about: 'My team made a website that filters fake and real reviews of products listed on amazon.com to get the correct rating.',
      code: '',
      brochure: ''
    }, {
      date: 'September 2019',
      name: 'VitHack',
      for: '1st Prize',
      about: "VitHack is a hackathon organised as a part of the annual tech fest, Gravitas. My team made a chatbot to answer common FAQs regarding HPE Enterprises' product,  HPE Oneview.",
      code: '',
      brochure: ''
    }, {
      date: 'March 2019',
      name: 'HackGrid 2019',
      for: '2nd Prize',
      about: 'HackGrid is an annual hackathon organised by Apple Developers Group, VIT Unirsity. My team built a web application that helps report crimes dring elections.',
      code: '',
      brochure: ''
    }, {
      date: 'January 2019',
      name: 'MedTech Challenge',
      for: '1st Prize',
      about: 'My teams pitch for a modular bionic arm got selected for a Rs 50,000 start-up grant by my college.',
      code: '',
      brochure: ''
    }];
  }
  getAwards() {
    return this.awards;
  }
  getProjects() {
    return this.projects;
  }
  getSkills() {
    return this.skills;
  }
  getWorks() {
    return this.works;
  }
  getEducation() {
    return this.educations;
  }
  static #_ = this.ɵfac = function DataService_Factory(t) {
    return new (t || DataService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: DataService,
    factory: DataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8973:
/*!****************************************************************!*\
  !*** ./src/app/history/achievements/achievements.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AchievementsComponent: () => (/* binding */ AchievementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 5297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  "hide": a0
});
function AchievementsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const award_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", award_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", award_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", award_r1.for, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", award_r1.about, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", award_r1.code, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, award_r1.code == ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", award_r1.brochure, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, award_r1.code == ""));
  }
}
class AchievementsComponent {
  constructor(data) {
    this.data = data;
    this.awards = data.getAwards();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AchievementsComponent_Factory(t) {
    return new (t || AchievementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AchievementsComponent,
    selectors: [["app-achievements"]],
    decls: 5,
    vars: 1,
    consts: [[1, "container-fluid", 2, "text-align", "center"], [1, "header"], [1, "awards"], ["class", "award", 4, "ngFor", "ngForOf"], [1, "award"], [1, "date"], [1, "name"], [1, "for"], [1, "about"], [1, "icons"], [1, "icon", 3, "ngClass", "href"], [1, "fas", "fa-code"], ["href", "", 1, "icon", 3, "ngClass", "href"], [1, "fas", "fa-download"]],
    template: function AchievementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AchievementsComponent_div_4_Template, 14, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.awards);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".awards[_ngcontent-%COMP%]{\n    padding-top: 30px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.award[_ngcontent-%COMP%]{\n    margin: 10px;\n    width: 250px;\n    position: relative;\n    height: 250px;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    background-color: rgb(245, 245, 245);\n    transition-property: all;\n    transition-duration: 0.25s;\n    transition-timing-function: ease-out;\n}\n.award[_ngcontent-%COMP%]:hover{\n    border-bottom-style: solid;\n    border-bottom-width: 6px;\n    border-bottom-color: #21d150;\n    box-shadow: 1px 2px 10px 1px rgba(0,0,0,0.3);\n}\n.date[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-left: 20px;\n    font-size: 0.8rem;\n    color: rgb(85, 85, 85);\n    font-weight: bold;\n}\n.name[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 1.2rem;\n    margin-left: 20px;\n    margin-top: 10px;\n    max-width: 210px;\n    text-align: left;\n}\n.for[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    font-size: 0.8rem;\n    color: rgb(85, 85, 85);\n    font-weight: bold;\n}\n.about[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-left: 20px;\n    max-width: 210px;\n    font-size: 0.8rem;\n    color: rgb(85, 85, 85);\n    font-weight: bold;\n    text-align: left;\n}\n.icons[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    bottom: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    color: black;\n}\n.icon[_ngcontent-%COMP%]{\n    color: black !important;\n    margin: 5px;\n    cursor: pointer;\n}\n.icon[_ngcontent-%COMP%]:hover{\n    color: #21d150 !important;\n}\n.hide[_ngcontent-%COMP%]{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGlzdG9yeS9hY2hpZXZlbWVudHMvYWNoaWV2ZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLmF3YXJkc3tcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXdhcmR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbi5hd2FyZDpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIxZDE1MDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcbi5kYXRle1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5hbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmZvcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogcmdiKDg1LCA4NSwgODUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFib3V0e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaWNvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb257XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pY29uOmhvdmVye1xyXG4gICAgY29sb3I6ICMyMWQxNTAgIWltcG9ydGFudDtcclxufVxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 643:
/*!**********************************************************!*\
  !*** ./src/app/history/education/education.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationComponent: () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 5297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function EducationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const education_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](education_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](education_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", education_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", education_r1.degree, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", education_r1.info, " ");
  }
}
class EducationComponent {
  constructor(data) {
    this.data = data;
    this.educations = data.getEducation();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function EducationComponent_Factory(t) {
    return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EducationComponent,
    selectors: [["app-education"]],
    decls: 5,
    vars: 1,
    consts: [[1, "container-fluid", "education-enc", 2, "padding-top", "120px"], [1, "header"], [1, "row"], ["class", "education col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-10 offset-1", 4, "ngFor", "ngForOf"], [1, "education", "col-lg-6", "offset-lg-3", "col-md-8", "offset-md-2", "col-sm-10", "offset-sm-1", "col-10", "offset-1"], [1, "about"], [1, "place"], [1, "name"], [1, "city"], [1, "date"], [1, "degree"], [1, "info"]],
    template: function EducationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EducationComponent_div_4_Template, 13, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.educations);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".education-enc[_ngcontent-%COMP%]{\n    background-color: rgb(245, 245, 245);\n    text-align: center;\n}\n.education[_ngcontent-%COMP%]{\n    background-color: white;\n    box-shadow: 1px 2px 2.5px 1px rgba(0,0,0,0.3);\n    padding: 30px;\n    margin-top: 20px;\n}\n.education[_ngcontent-%COMP%]:hover{\n    transform: scale(1.01);\n    box-shadow: 2px 4px 5px 2px rgba(0,0,0,0.3);\n}\n.about[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n}\n.place[_ngcontent-%COMP%]{\n    justify-self: flex-start;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n}\n.name[_ngcontent-%COMP%]{\n    font-size: 1.2rem;\n    color: black;\n    font-weight: bold;\n    text-align: left;\n}\n@media only screen and (max-width: 390px) {\n    .name[_ngcontent-%COMP%]{\n        font-size: 1rem;\n    }\n}\n.city[_ngcontent-%COMP%]{\n    color: rgb(94, 94, 94);\n    font-size: 1rem;\n}\n.date[_ngcontent-%COMP%]{\n    color: rgb(94, 94, 94);\n    font-size: 1rem;\n    justify-self: flex-end;\n}\n.degree[_ngcontent-%COMP%]{\n    color: rgb(94, 94, 94);\n    font-size: 1rem;\n    text-align: left;\n}\n.info[_ngcontent-%COMP%]{\n    margin-top: 15px;\n    color: rgb(94, 94, 94);\n    font-size: 1rem;\n    text-align: left;\n}\n@media only screen and (max-width: 570px){\n    .about[_ngcontent-%COMP%]{\n        flex-direction: column;\n        align-items: flex-start\n    }\n    .date[_ngcontent-%COMP%]{\n        justify-self: flex-start;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGlzdG9yeS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QjtJQUNKO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5lZHVjYXRpb24tZW5je1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5lZHVjYXRpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMi41cHggMXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5lZHVjYXRpb246aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMnB4IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG4uYWJvdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5wbGFjZXtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLm5hbWV7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5MHB4KSB7XHJcbiAgICAubmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbn1cclxuLmNpdHl7XHJcbiAgICBjb2xvcjogcmdiKDk0LCA5NCwgOTQpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5kYXRle1xyXG4gICAgY29sb3I6IHJnYig5NCwgOTQsIDk0KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuLmRlZ3JlZXtcclxuICAgIGNvbG9yOiByZ2IoOTQsIDk0LCA5NCk7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5pbmZve1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiByZ2IoOTQsIDk0LCA5NCk7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpe1xyXG4gICAgLmFib3V0e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcclxuICAgIH1cclxuICAgIC5kYXRle1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3560:
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryComponent: () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education/education.component */ 643);
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievements/achievements.component */ 8973);



class HistoryComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function HistoryComponent_Factory(t) {
    return new (t || HistoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HistoryComponent,
    selectors: [["app-history"]],
    decls: 3,
    vars: 0,
    template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "WWW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_education_education_component__WEBPACK_IMPORTED_MODULE_0__.EducationComponent, _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_1__.AchievementsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9590:
/*!****************************************!*\
  !*** ./src/app/play/play.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayComponent: () => (/* binding */ PlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PlayComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PlayComponent_Factory(t) {
    return new (t || PlayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PlayComponent,
    selectors: [["app-play"]],
    decls: 2,
    vars: 0,
    template: function PlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "play works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3568:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  scroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 45,
    vars: 0,
    consts: [[1, "container-fluid", "footer-enc"], [1, "footer"], [1, "footer-item"], [1, "footer-name"], [1, "resume"], ["target", "_blank", "href", "/assets/Vatsal's Resume.pdf", 1, "no-link"], [1, "footer-social-item"], ["id", "submit"], [1, "row"], [1, "col"], ["type", "text", "placeholder", "First name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Last name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "you@email.com", "required", "", 1, "form-control"], ["placeholder", "Your message", "required", "", 1, "form-control"], ["disabled", "", 1, "btn", "btn-large", "button"], [1, "social-icons"], [1, "social-text"], [1, "icons"], ["href", "https://twitter.com/vatsal_kandoi", 1, "icon"], [1, "fab", "fa-twitter"], ["href", "https://github.com/vatsal-kandoi", 1, "icon"], [1, "fab", "fa-linkedin"], ["href", "https://www.linkedin.com/in/vatsal-kandoi-74027217b/", 1, "icon"], [1, "fab", "fa-github"], ["href", "https://www.facebook.com/batsal.kandoi", 1, "icon"], [1, "fab", "fa-facebook"], ["href", "mailto:vatsalkandoi1998@gmail.com", 1, "icon"], [1, "fas", "fa-envelope"], [1, "up-arrow"], [1, "fas", "icon", "fa-chevron-up", 3, "click"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello, I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Vatsal,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " a student of VIT University, passionate about software development and robotics. Working with the web, and also building autonomous aerial vehicles for the past two years have helped me shape my coding and logical skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View my resume \u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "form", 7)(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8)(24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Currently unavailable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15)(30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Get in touch via");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17)(33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28)(44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_i_click_44_listener() {
          return ctx.scroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".footer-enc[_ngcontent-%COMP%]{\n    background-color: rgb(39, 39, 39);\n    padding-top: 30px;\n    padding-bottom: 60px;\n}\n.footer[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    justify-content: center;\n}\n.footer-item[_ngcontent-%COMP%]{\n    width: 35%;\n    font-size: 0.8rem;\n    color: white;\n    font-weight: bold;\n    margin: 10px;\n}\n.footer-social-item[_ngcontent-%COMP%]{\n    width: 35%;\n    padding: 10px;\n    color: white;\n    font-weight: bold;\n    margin: 10px;\n}\n.input[_ngcontent-%COMP%]{\n    width: 100% !important;\n}\n.footer-name[_ngcontent-%COMP%]{\n    color: #21d150 !important;\n}\n.resume[_ngcontent-%COMP%]{\n    color: #21d150;\n    margin-top: 50px;\n    cursor: pointer;\n    transition-duration: 0.25s;\n    transition-property: all;\n    transition-timing-function: ease-out;\n}\n.resume[_ngcontent-%COMP%]:hover{\n    color: rgb(81, 253, 81);\n}\n.made[_ngcontent-%COMP%]{\n    margin-top: 80px;\n    color: white;\n}\n.green[_ngcontent-%COMP%]{\n    color: #21d150 !important; \n}\n.button[_ngcontent-%COMP%]{\n    background-color: #21d150;\n    color: white;\n    font-weight: bold;\n    width: 100%;\n    transition-duration: 0.25s;\n    transition-property: all;\n    transition-timing-function: ease-out;\n}\n.button[_ngcontent-%COMP%]:hover{\n    background-color: rgb(81, 253, 81);\n}\n.social-icons[_ngcontent-%COMP%]{\n    margin-top: 30px;\n    text-align: center;\n    font-weight: bold;\n    color: #21d150;\n    width: 40%;\n}\n.social-text[_ngcontent-%COMP%]{\n    font-size: 1.5rem;\n    color: #21d150;\n}\n.icon[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: white;\n    margin: 5px;\n    cursor: pointer;\n    font-size: 1.2rem;\n}\n@media only screen and (max-width: 800px) {\n    .footer-item[_ngcontent-%COMP%]{\n        width: 60%;\n    }\n    .footer-social-item[_ngcontent-%COMP%]{\n        width: 60%;\n    }\n    .social-icons[_ngcontent-%COMP%]{\n        widows: 60%;\n    }\n}\n@media only screen and (max-width:550px) {\n    .footer-item[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n    .footer-social-item[_ngcontent-%COMP%]{\n        width: 80%;\n    }\n    .social-icons[_ngcontent-%COMP%]{\n        widows: 80%;\n    }\n}\n.up-arrow[_ngcontent-%COMP%]{\n    padding: 10px;\n    font-size: 2rem;\n    color: white;\n    display: flex;\n    justify-content: center;\n    padding-top: 30px;\n}\n.no-link[_ngcontent-%COMP%]{\n    color: inherit;\n    text-decoration: none;\n}\n.icon[_ngcontent-%COMP%]:hover{\n    color: #21d150;\n}\n@media only screen and (max-width:473px) {\n    .social-text[_ngcontent-%COMP%]{\n        font-size: 1rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWVuY3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzksIDM5KTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn1cclxuLmZvb3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZvb3Rlci1pdGVte1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmZvb3Rlci1zb2NpYWwtaXRlbXtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyLW5hbWV7XHJcbiAgICBjb2xvcjogIzIxZDE1MCAhaW1wb3J0YW50O1xyXG59XHJcbi5yZXN1bWV7XHJcbiAgICBjb2xvcjogIzIxZDE1MDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG4ucmVzdW1lOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYig4MSwgMjUzLCA4MSk7XHJcbn1cclxuLm1hZGV7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ncmVlbntcclxuICAgIGNvbG9yOiAjMjFkMTUwICFpbXBvcnRhbnQ7IFxyXG59XHJcbi5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFkMTUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODEsIDI1MywgODEpO1xyXG59XHJcbi5zb2NpYWwtaWNvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIxZDE1MDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuLnNvY2lhbC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogIzIxZDE1MDtcclxufVxyXG4uaWNvbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmZvb3Rlci1pdGVte1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXNvY2lhbC1pdGVte1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25ze1xyXG4gICAgICAgIHdpZG93czogNjAlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCkge1xyXG4gICAgLmZvb3Rlci1pdGVte1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXNvY2lhbC1pdGVte1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWljb25ze1xyXG4gICAgICAgIHdpZG93czogODAlO1xyXG4gICAgfVxyXG59XHJcbi51cC1hcnJvd3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4ubm8tbGlua3tcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pY29uOmhvdmVye1xyXG4gICAgY29sb3I6ICMyMWQxNTA7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ3M3B4KSB7XHJcbiAgICAuc29jaWFsLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8290:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



const _c0 = a0 => ({
  "shadow": a0
});
const _c1 = () => [""];
const _c2 = () => ({
  exact: true
});
const _c3 = () => ["education"];
class NavbarComponent {
  doSomething(event) {
    if (window.scrollY < 100) {
      this.shadow = false;
    } else {
      this.shadow = true;
    }
  }
  constructor() {}
  ngOnInit() {
    this.shadow = false;
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
          return ctx.doSomething($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 8,
    vars: 9,
    consts: [[1, "container-fluid", "navbar-container", 3, "ngClass"], ["href", "#", 1, "brand"], ["src", "assets/images/logo_transparent.png", 1, "logo"], [1, "nav-items-options"], ["routerLinkActive", "active", 1, "item-enc", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "item-enc", 3, "routerLink"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.shadow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
    styles: [".logo[_ngcontent-%COMP%]{\n    width: 80px;\n}\n.navbar-container[_ngcontent-%COMP%]{\n    display: flex;\n    height: 80px;\n    top: 0;\n    flex-direction: row;\n    left: 0;\n    position: fixed;\n    z-index: 50;\n    background-color: white;\n    align-items: center;\n    justify-content: space-between;\n}\n.shadow[_ngcontent-%COMP%]{\n    box-shadow: 1px 2px 2.5px 0.5px rgba(0,0,0,0.6);\n}\n.brand[_ngcontent-%COMP%]{\n    justify-self: flex-start;\n}\n.nav-items-options[_ngcontent-%COMP%]{\n    justify-self: flex-end;\n    display: flex;\n    flex-direction: row;\n    z-index: 2;\n}\n.item[_ngcontent-%COMP%]{\n    font-weight: bold !important;\n    color: black !important;\n}\n.item-enc[_ngcontent-%COMP%]{\n    z-index: 3;\n    margin-left: 5px;\n    margin-right: 5px;\n    cursor: pointer !important;\n    text-decoration: none;\n    list-style: none;\n    padding: 5px;\n    color: black;\n    font-weight: bold;\n}\n.item-enc[_ngcontent-%COMP%]:hover{\n    border-bottom-color: #21d150 !important;\n    border-bottom-style: solid !important;\n    border-bottom-width: 3px !important;\n}\n.item-enc[_ngcontent-%COMP%]:focus{\n    border-bottom-color: #21d150 !important;\n    border-bottom-style: solid !important;\n    border-bottom-width: 3px !important;\n}\n.active[_ngcontent-%COMP%]{\n    border-bottom-color: #21d150 !important;\n    border-bottom-style: solid !important;\n    border-bottom-width: 3px !important;\n}\n@media only screen and (max-width: 300px) {\n    .nav-items-options[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHFDQUFxQztJQUNyQyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDckMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMscUNBQXFDO0lBQ3JDLG1DQUFtQztBQUN2QztBQUNBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcbi5uYXZiYXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHRvcDogMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogNTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnNoYWRvd3tcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMi41cHggMC41cHggcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcbi5icmFuZHtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxufVxyXG4ubmF2LWl0ZW1zLW9wdGlvbnN7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5pdGVte1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5pdGVtLWVuY3tcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaXRlbS1lbmM6aG92ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjFkMTUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0tZW5jOmZvY3Vze1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIxZDE1MCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjFkMTUwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgLm5hdi1pdGVtcy1vcHRpb25ze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9433:
/*!************************************************!*\
  !*** ./src/app/works/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 11,
    vars: 0,
    consts: [["id", "about", 1, "container-fluid", "about-enc", 2, "text-align", "center"], [1, "header"], [1, "info", "container"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I am Vatsal Kandoi, a web developer and electronics engineer, passionate about building scalable applications, and aeroplanes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br")(7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Building web applications for the past two years has been a great experience for me, from thinking \"why should I waste time in structuring my code\" to \"first I need to decide how to structure this application\". I have written both, an API in a single file, and a properly structured API. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Being a part of an aviation team has taught me to use the most optimum component required for a task, while taking into consideration the weight, cost, and importance of the component. I guess working on a limited budget with little scope for error really makes you think before making a decision. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".info[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    width: 80%;\n    text-align: left;\n    padding-left: 30px;\n    padding-right: 30px;\n    font-size: 1rem;\n}\n.about-enc[_ngcontent-%COMP%]{\n    background-color: rgb(245, 245, 245);\n}\n@media only screen and (max-width:461px) {\n    .info[_ngcontent-%COMP%]{\n        width: 90%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya3MvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm97XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5hYm91dC1lbmN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ2MXB4KSB7XHJcbiAgICAuaW5mb3tcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4361:
/*!****************************************************!*\
  !*** ./src/app/works/landing/landing.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LandingComponent {
  constructor() {}
  ngOnInit() {}
  ToForm() {
    // // document.body.scrollTop = document.getElementById('submit').scrollHeight;
    // console.log(document.getElementById('submit').scrollTop)
    // // document.documentElement.scrollTop = document.getElementById('submit').scrollHeight;
    document.getElementById('submit').scrollIntoView(true);
  }
  scroll() {
    document.body.scrollTop = document.getElementById('about').scrollHeight + 50;
    console.log(document.getElementById('about').scrollHeight);
    document.documentElement.scrollTop = document.getElementById('about').scrollHeight + 50;
  }
  static #_ = this.ɵfac = function LandingComponent_Factory(t) {
    return new (t || LandingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LandingComponent,
    selectors: [["app-landing"]],
    decls: 15,
    vars: 0,
    consts: [[1, "container-fluid", "landing-page"], ["src", "assets/images/image.png", 1, "landing-page-image"], [1, "landing-page-info"], [1, "landing-page-name"], [1, "landing-btn-enclosure"], ["target", "_blank", "href", "/assets/Vatsal's Resume.pdf", 1, "no-link"], [1, "btn", "btn-large", "button"], [1, "btn", "btn-large", "button", 3, "click"], [1, "down-arrow"], [1, "fas", "fa-chevron-down", 3, "click"]],
    template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hi! I'm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vatsal,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " currently studying at VIT University. Feel free to say hello ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "a", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_11_listener() {
          return ctx.ToForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Say hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_i_click_14_listener() {
          return ctx.scroll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".landing-page[_ngcontent-%COMP%]{\n    height: 100vh;\n    top: 0;\n    left: 0;\n    min-height: 600px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n.landing-page-image[_ngcontent-%COMP%]{\n    height: 150px;\n}\n.no-link[_ngcontent-%COMP%]{\n    text-decoration: none;\n}\n.landing-page-info[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size:1.2rem;\n    max-width: 400px;\n    text-align: center;\n}\n.landing-page-name[_ngcontent-%COMP%]{\n    color: #21d150 !important;\n}\n.landing-btn-enclosure[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: center;\n}\n.button[_ngcontent-%COMP%]{\n    width: 150px;\n    background-color: #21d150;\n    color: white;\n    font-weight: bold;\n    margin: 10px;\n    border-radius: 20px;\n}\n.down-arrow[_ngcontent-%COMP%]{\n    font-size: 2rem;\n    margin-top: 50px;\n    cursor: pointer;\n}\n.down-arrow[_ngcontent-%COMP%]:hover{\n    transform: scale(1.2);\n    color: #21d150;\n}\n\n@media only screen and (max-width:383px){\n    .landing-btn-enclosure[_ngcontent-%COMP%]{\n        flex-direction: column;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya3MvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsTUFBTTtJQUNOLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLXBhZ2V7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxhbmRpbmctcGFnZS1pbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLm5vLWxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmxhbmRpbmctcGFnZS1pbmZve1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MS4ycmVtO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubGFuZGluZy1wYWdlLW5hbWV7XHJcbiAgICBjb2xvcjogIzIxZDE1MCAhaW1wb3J0YW50O1xyXG59XHJcbi5sYW5kaW5nLWJ0bi1lbmNsb3N1cmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxZDE1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uZG93bi1hcnJvd3tcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRvd24tYXJyb3c6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjb2xvcjogIzIxZDE1MDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM4M3B4KXtcclxuICAgIC5sYW5kaW5nLWJ0bi1lbmNsb3N1cmV7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3047:
/*!******************************************************!*\
  !*** ./src/app/works/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 5297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  "hide": a0
});
function ProjectsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10)(11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.for, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.about, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r1.code, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, project_r1.code == ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r1.brochure, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, project_r1.brochure == ""));
  }
}
class ProjectsComponent {
  constructor(data) {
    this.data = data;
    this.projects = data.getProjects();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ProjectsComponent_Factory(t) {
    return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProjectsComponent,
    selectors: [["app-projects"]],
    decls: 5,
    vars: 1,
    consts: [[1, "container-fluid", "project-enc", 2, "text-align", "center"], [1, "header"], [1, "container", "projects"], ["class", "project", 4, "ngFor", "ngForOf"], [1, "project"], [1, "show-tech"], [1, "date"], [1, "name"], [1, "for"], [1, "about"], [1, "icons"], [1, "icon", 3, "ngClass", "href"], [1, "fas", "fa-code"], ["href", "", 1, "icon", 3, "ngClass", "href"], [1, "fas", "fa-download"]],
    template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectsComponent_div_4_Template, 15, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".project-enc[_ngcontent-%COMP%]{\n    background-color: rgb(245, 245, 245);\n}\n.projects[_ngcontent-%COMP%]{\n    padding-top: 30px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n}\n.project[_ngcontent-%COMP%]{\n    margin: 10px;\n    width: 250px;\n    position: relative;\n    height: 275px;\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n    background-color: white;\n    transition-property: all;\n    transition-duration: 0.25s;\n    transition-timing-function: ease-out;\n}\n.hide[_ngcontent-%COMP%]{\n    display: none;\n}\n.project[_ngcontent-%COMP%]:hover{\n    transform: scale(1.01);\n    border-bottom-style: solid;\n    border-bottom-width: 6px;\n    border-bottom-color: #21d150;\n    box-shadow: 1px 2px 10px 1px rgba(0,0,0,0.3);\n}\n.show-tech[_ngcontent-%COMP%]{\n    position: absolute;\n    top:0;\n    right: 30px;\n    color: rgb(228, 228, 228);\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    z-index: 10;\n    flex-direction: column;\n    background-color: rgb(228, 228, 228);\n    height: 30px;\n    width: 30px;\n}\n\n.show-tech[_ngcontent-%COMP%]::after{\n    content: ' ';\n    height: 15px;\n    width: 30px;\n    position: absolute;\n    top:30px;\n    right: 0px;\n    background-color: rgb(228, 228, 228);\n    border-bottom-right-radius: 50%;\n    border-bottom-left-radius: 50%;\n}\n.date[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-left: 20px;\n    font-size: 0.8rem;\n    color: rgb(85, 85, 85);\n    font-weight: bold;\n}\n.name[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 1rem;\n    margin-left: 20px;\n    margin-top: 5px;\n    max-width: 210px;\n    text-align: left;\n}\n.for[_ngcontent-%COMP%]{\n    margin-left: 20px;\n    font-size: 0.8rem;\n    color: rgb(85, 85, 85);\n    font-weight: bold;\n}\n.about[_ngcontent-%COMP%]{\n    margin-top: 5px;\n    margin-left: 20px;\n    max-width: 210px;\n    font-size: 0.8rem;\n    color: rgb(85, 85, 85);\n    font-weight: bold;\n    text-align: left;\n}\n.icons[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    bottom: 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    color: black;\n}\n.icon[_ngcontent-%COMP%]{\n    color: black !important;\n    margin: 5px;\n    cursor: pointer;\n}\n.icon[_ngcontent-%COMP%]:hover{\n    color: #21d150 !important;\n}\n.show[_ngcontent-%COMP%]{\n    position: absolute;\n    top:12.5px;\n    right: 7.5px;\n    cursor: pointer;\n    color: black !important;\n}\n.show[_ngcontent-%COMP%]:hover{\n    color: #21d150 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya3MvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWVuY3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxufVxyXG4ucHJvamVjdHN7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnByb2plY3R7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI3NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbn1cclxuLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wcm9qZWN0OmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIxZDE1MDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjMpO1xyXG59XHJcbi5zaG93LXRlY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIyOCwgMjI4KTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uc2hvdy10ZWNoOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjMwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjI4LCAyMjgpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxufVxyXG4uZGF0ZXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5uYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1heC13aWR0aDogMjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5mb3J7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hYm91dHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IHJnYig4NSwgODUsIDg1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaWNvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmljb257XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pY29uOmhvdmVye1xyXG4gICAgY29sb3I6ICMyMWQxNTAgIWltcG9ydGFudDtcclxufVxyXG4uc2hvd3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDoxMi41cHg7XHJcbiAgICByaWdodDogNy41cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4uc2hvdzpob3ZlcntcclxuICAgIGNvbG9yOiAjMjFkMTUwICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7535:
/*!**************************************************!*\
  !*** ./src/app/works/skills/skills.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 5297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function SkillsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", skill_r1, " ");
  }
}
class SkillsComponent {
  constructor(data) {
    this.data = data;
    this.skills = data.getSkills();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SkillsComponent_Factory(t) {
    return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SkillsComponent,
    selectors: [["app-skills"]],
    decls: 5,
    vars: 1,
    consts: [[1, "container-fluid", 2, "text-align", "center"], [1, "header"], [1, "container", "info"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"]],
    template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SkillsComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".info[_ngcontent-%COMP%]{\n    padding-top: 30px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n.skill[_ngcontent-%COMP%]{\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background-color: rgb(236, 236, 236);   \n    margin: 10px;\n    border-radius: 20px;\n    font-weight: bold;\n    font-size: 0.8rem;\n    box-shadow: 1px 2px 2.5px 0.5px rgba(0,0,0,0.6);\n    transition-property: all;\n    transition-duration: 0.25s;\n    transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n}\n.skill[_ngcontent-%COMP%]:hover{\n    transform: scale(1.01);\n    box-shadow: 2px 4px 5px 1px rgba(0,0,0,0.6);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya3Mvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsK0NBQStDO0lBQy9DLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJDQUEyQztBQUMvQyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZve1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnNraWxse1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7ICAgXHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMi41cHggMC41cHggcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG4uc2tpbGw6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC42KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7837:
/*!**********************************************!*\
  !*** ./src/app/works/work/work.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkComponent: () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data.service */ 5297);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function WorkComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9)(7, "div", 10)(8, "div", 11)(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13)(12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r1.company, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r1.position, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", experience_r1.info, " ");
  }
}
class WorkComponent {
  constructor(data) {
    this.data = data;
    this.experiences = data.getWorks();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function WorkComponent_Factory(t) {
    return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: WorkComponent,
    selectors: [["app-work"]],
    decls: 5,
    vars: 1,
    consts: [[1, "container-fluid", 2, "text-align", "center"], [1, "header"], [1, "container", "exp-container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-2", "date"], [1, "col-lg-1", "col-md-2", "col-sm-2", "timeline"], [1, "circle"], [1, "fas", "fa-briefcase"], [1, "col-lg-8", "col-md-10", "col-sm-10", "experience-enc"], [1, "experience"], [1, "experience-header"], [1, "company"], [1, "position"], [1, "position-info"], [1, "date-exp"]],
    template: function WorkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Experiences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WorkComponent_div_4_Template, 18, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.experiences);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: [".timeline[_ngcontent-%COMP%]{\n    position: relative;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.timeline[_ngcontent-%COMP%]::after{\n    position: absolute;\n    content: '';\n    position: absolute;\n    width: 6px;\n    background-color: #21d150;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    margin-left: -3px;\n}\n.date[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-weight: bold;\n    color: rgb(99, 99, 99);\n}\n.exp-container[_ngcontent-%COMP%]{\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n.circle[_ngcontent-%COMP%]{\n    height: 60px;\n    width: 60px;\n    font-size: 2rem;\n    z-index: 3;\n    color: white;\n    border-radius: 30px;\n    display: flex;\n    background-color: #21d150;\n    align-items: center;\n    justify-content: center;\n}\n.experience-enc[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n.experience[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    margin-bottom: 20px;\n    width: 90%;\n    text-align: left;\n    background-color: rgb(250, 250, 250);\n    box-shadow: 1px 2px 2.5px 0.5px rgba(0,0,0,0.6);\n    transition-property: all;\n    transition-duration: 0.25s;\n    transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n}\n.experience-header[_ngcontent-%COMP%]{\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n.company[_ngcontent-%COMP%]{\n    align-self: flex-start;\n    font-size: 1.5rem;\n    max-width: 60%;\n    color: black;\n    text-align: left;\n}\n.position[_ngcontent-%COMP%]{\n    color: rgb(88, 88, 88);\n    width: 100%;\n    align-self: flex-start;\n    display: inline-flex;\n    justify-content: space-between;\n    font-size: 1rem;\n}\n.position-info[_ngcontent-%COMP%]{\n    align-self: flex-start;\n}\n.date-exp[_ngcontent-%COMP%]{\n    display: none;\n    align-self: flex-end;\n}\n.experience[_ngcontent-%COMP%]:hover{\n    transform: scale(1.01);\n    box-shadow: 2px 4px 5px 1px rgba(0,0,0,0.6);\n}\n@media only screen and (max-width:992px){\n    .date[_ngcontent-%COMP%]{\n        display: none !important;\n    }\n    .date-exp[_ngcontent-%COMP%]{\n        display: block !important;\n    }\n}\n@media only screen and (max-width:578px){\n    .experience[_ngcontent-%COMP%]{\n        width: 100% !important;\n    }\n    .circle[_ngcontent-%COMP%]{\n        width: 40px;\n        height: 40px;\n        font-size: 1.2rem;\n    }\n}\n@media only screen and (max-width:525px){\n    .position[_ngcontent-%COMP%]{\n        flex-direction: column;\n    }\n    .date-exp[_ngcontent-%COMP%]{\n        align-self: flex-start;\n    }\n}\n@media only screen and (max-width:575px) {\n    .timeline[_ngcontent-%COMP%]{\n        width: 30%;\n    }\n    .experience-enc[_ngcontent-%COMP%]{\n        width: 65%;\n    }\n}\n@media only screen and (max-width:375px) {\n    .timeline[_ngcontent-%COMP%]{\n        width: 25%;\n    }\n    .experience-enc[_ngcontent-%COMP%]{\n        width: 75%;\n    }\n}\n@media only screen and (max-width: 390px) {\n    .company[_ngcontent-%COMP%]{\n        font-size: 1.1rem;\n        max-width: 80%;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvd29ya3Mvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04sU0FBUztJQUNULFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsK0NBQStDO0lBQy9DLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjtBQUNBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7SUFDbEI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50aW1lbGluZTo6YWZ0ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFkMTUwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbn1cclxuLmRhdGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbn1cclxuLmV4cC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jaXJjbGV7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMWQxNTA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmV4cGVyaWVuY2UtZW5je1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmV4cGVyaWVuY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAyLjVweCAwLjVweCByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmV4cGVyaWVuY2UtaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNvbXBhbnl7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnBvc2l0aW9ue1xyXG4gICAgY29sb3I6IHJnYig4OCwgODgsIDg4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5wb3NpdGlvbi1pbmZve1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG4uZGF0ZS1leHB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuLmV4cGVyaWVuY2U6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMXB4IHJnYmEoMCwwLDAsMC42KTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgLmRhdGV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRhdGUtZXhwe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3OHB4KXtcclxuICAgIC5leHBlcmllbmNle1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2lyY2xle1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTI1cHgpe1xyXG4gICAgLnBvc2l0aW9ue1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuZGF0ZS1leHB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuICAgIC50aW1lbGluZXtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgLmV4cGVyaWVuY2UtZW5je1xyXG4gICAgICAgIHdpZHRoOiA2NSU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM3NXB4KSB7XHJcbiAgICAudGltZWxpbmV7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICAgIC5leHBlcmllbmNlLWVuY3tcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcclxuICAgIC5jb21wYW55e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9180:
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorksComponent: () => (/* binding */ WorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/landing.component */ 4361);
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./work/work.component */ 7837);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 3047);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 9433);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ 7535);






class WorksComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WorksComponent_Factory(t) {
    return new (t || WorksComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: WorksComponent,
    selectors: [["app-works"]],
    decls: 5,
    vars: 0,
    template: function WorksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-landing")(1, "app-about")(2, "app-work")(3, "app-skills")(4, "app-projects");
      }
    },
    dependencies: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent, _work_work_component__WEBPACK_IMPORTED_MODULE_1__.WorkComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__.SkillsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map