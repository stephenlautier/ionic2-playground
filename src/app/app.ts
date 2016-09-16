import { Component } from "@angular/core";

import { HomePage } from "./pages/home/home";

@Component({
	moduleId: module.id,
	templateUrl: "app.html"
})
export class MyApp {

	rootPage: any;

	constructor(
	) {
		this.rootPage = HomePage;
	}
}







