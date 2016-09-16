import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { NavParams } from "ionic-angular";
import { Subscription } from "rxjs/subscription";

import { Hero } from "./hero.model";
import { HeroService } from "./hero.service";

@Component({
	moduleId: module.id,
	templateUrl: "hero-detail.html"
})
export class HeroDetailPage implements OnInit, OnDestroy {

	hero: Hero;
	private id: string;
	private hero$$: Subscription;

	constructor(
		private navParams: NavParams,
		private service: HeroService,
		private changeDetector: ChangeDetectorRef
	) {

	}

	ngOnInit() {
		this.id = this.navParams.get("hero");

		this.hero$$ = this.service.get(this.id)
			.do(x => this.hero = x)
			.do(() => this.changeDetector.markForCheck())
			.subscribe();
	}

	ngOnDestroy() {
		this.hero$$.unsubscribe();
	}


}