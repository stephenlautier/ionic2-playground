import { BehaviorSubject, Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";

export interface RouteModel {
	path: string;
	component: any;
}

@Injectable()
export class RouterService {

	activeRoute$ = new BehaviorSubject<any>(null);
	private routesMap = new Map<string, RouteModel>();

	initialize(): void {
		Observable.fromEvent(window, "popstate")
			.subscribe(x => {
				console.log(`[routerService::onpopstate] init subscribe`, window.location);
				this.resolve();
			});
		this.resolve();
	}

	mapRoutes(routes: RouteModel[]) {
		for (let route of routes) {
			this.routesMap.set(route.path, route);
		}
	}

	determineRoute() {
		return this.routesMap.get(window.location.hash);
	}

	private resolve(): void {
		const route = this.determineRoute();
		if (!route) {
			console.warn(`Route not found!`, window.location);
			return;
		}
		console.log(`Route found! Navigating...`, { location: window.location, component: route });
		this.activeRoute$.next(route);
	}

}
