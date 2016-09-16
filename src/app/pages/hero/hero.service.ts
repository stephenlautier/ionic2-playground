import * as _ from "lodash";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import { of } from "rxjs/observable/of";

import { Hero } from "./hero.model";

@Injectable()
export class HeroService {

	private data: Hero[] = [
		{ key: "thrall", name: "Thrall", title: "Warchief of the Horde" },
		{ key: "guldan", name: "Gul'dan", title: "Darkness Incarante" },
		{ key: "chromie", name: "Chromie", title: "Keeper of Time" },
		{ key: "chogall", name: "Cho'Gall", title: "Twilight's Hammer Chieftain" },
		{ key: "rexxar", name: "Rexxar", title: "Champion of the Horde" },
	];

	getAll(): Observable<Hero[]> {
		return of(this.data);
	}

	get(key: string): Observable<Hero> {
		const item = _.find(this.data, { key: key });
		return of(item);
	}

}