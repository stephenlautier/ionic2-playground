import { NgModule } from "@angular/core";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { IonicModule, IonicApp, DeepLinkConfig } from "ionic-angular";

import { HomePage, HeroListPage, HeroDetailPage, HeroService } from "./pages/index";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

@NgModule({
	declarations: [
		AppComponent,
		HomePage,
		HeroListPage,
		HeroDetailPage,
	],
	imports: [
		IonicModule.forRoot(AppComponent, null, {
			links: routes
		} as DeepLinkConfig) // todo: @ionic add typing
	],
	bootstrap: [
		IonicApp
	],
	entryComponents: [
		HomePage,
		HeroListPage,
		HeroDetailPage,
	],
	providers: [
		HeroService,
		{ provide: LocationStrategy, useClass: PathLocationStrategy },
	]
})
export class AppModule {
}
