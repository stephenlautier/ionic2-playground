import { Component } from '@angular/core';

import { HomePage } from '../pages/home/home';

@Component({
  template: '<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>'
})
export class NavComponent {
  rootPage = HomePage;
}
