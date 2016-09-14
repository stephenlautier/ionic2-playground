import { NgModule } from "@angular/core";
import { IonicModule, IonicApp } from "ionic-angular";

import { TabsPage } from "./pages/tabs/tabs";
import { HomePage } from "./pages/home/home";
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { deepLinkConfig } from "./shared/route.config";
import { NavComponent } from "./shared/nav.component"
import { MyApp } from "./app";

@NgModule({
  declarations: [
    TabsPage,
    HomePage,
    ContactPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(NavComponent, null, deepLinkConfig)
  ],
  bootstrap: [IonicApp, MyApp],
  entryComponents: [
    TabsPage,
    HomePage,
    ContactPage,
    AboutPage
  ]
})

export class AppModule {}
