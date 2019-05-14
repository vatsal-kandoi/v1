import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

/** This is an example of using template instead of templateUrl, thus eliminating the need of
 * an extra file, and declaring html where the component exits\
 * IMPORTANT : IS IT FASTER?
 */

@Component({
  selector: 'app-page-not-found',
  template: `
  <div class="row">
    <div class="icon"><i class="fas fa-frown fa-6x"></i></div>
    <div class="error">{{message}}</div>

    <div class="col l4 offset-l4 m6 offset-m3 s8 offset-s2 btn custom-btn"><a routerLink="/" style="color:white">Go to home page</a></div>
  </div>
  `,
  styles: [
    `.error{
        font-size:25px;
        font-weight: bold;
        color:#FA292A;
        text-align: center;
        padding:5px;
        margin:10px auto;
    }
    .icon{
        margin:40px auto;
        display:flex;
        color:#FA292A;
        margin-bottom:0px;
        align-items: center;
        justify-content: center;
    }
    .custom-btn{
        background-color: #2cc19c;
        font-weight: bold;
    }`
  ]
})
export class ErrorPageComponent implements OnInit {
  message: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.message = data.message;
        }
      );
  }
}
/** By adding a subbscription based observable event, we removed the need for another page not
 * found route and restricted the number of components used. reducing the size of the app.
 */
