import { App } from "ionic-angular";
import { Component } from '@angular/core';

import { AboutPage } from "../about/about";

@Component({
	moduleId: module.id,
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public app: App
	) {

	}

	open() {
		this.app.getRootNav().setRoot(AboutPage, null, { animate: false, direction: 'back' });
	}

}
