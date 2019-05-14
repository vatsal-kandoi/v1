import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
    `
    .size{
      width:20px;
      height: 20px;
    }
    .txtsize{
      height:200px;
    }
    `
  ]
})
export class ContactComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  formValue: string;
  constructor() {
    this.formValue = 'Submit';
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    this.formValue = 'Service unavailable.';
  }

}
