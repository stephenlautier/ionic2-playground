import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/observable";

import { Hero } from "./hero.model";
import { HeroService } from "./hero.service";

@Component({
	moduleId: module.id,
	templateUrl: "hero-list.html"
})
export class HeroListPage implements OnInit {

	heroes$: Observable<Hero[]>;

	constructor(
		private service: HeroService
	) {

	}

	ngOnInit() {
		this.heroes$ = this.service.getAll();
	}

}