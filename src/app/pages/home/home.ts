import { App } from "ionic-angular";
import { Component } from '@angular/core';

import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";

@Component({
	moduleId: module.id,
	templateUrl: 'home.html'
})
export class HomePage {

	component = ContactPage;

	constructor(
		public app: App
	) {

	}

	open() {
		this.app.getRootNav().setRoot(AboutPage, null, { animate: false, direction: 'back' });
	}

}
