import { NgModule } from "@angular/core";
import { IonicModule, IonicApp } from "ionic-angular";

import { TabsPage } from "./pages/tabs/tabs";
import { HomePage } from "./pages/home/home";
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { deepLinkConfig } from "./shared/route.config";
import { MyApp } from "./app";

@NgModule({
	declarations: [
		MyApp,
		TabsPage,
		HomePage,
		ContactPage,
		AboutPage
	],
	imports: [
		IonicModule.forRoot(MyApp, null, deepLinkConfig)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		TabsPage,
		HomePage,
		ContactPage,
		AboutPage
	]
})

export class AppModule { }
