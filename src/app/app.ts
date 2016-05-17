import {ViewChild} from "@angular/core";
import {Location} from "@angular/common";
import {App, IonicApp, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {ItemDetailsPage} from './pages/item-details/item-details';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import {LOGGER_PROVIDERS, LoggerFactory, ILog} from "ssv-ng2-core";
import consts from "./app.const";

@App({
  templateUrl: `${consts.basePath}/app.html`,
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    LOGGER_PROVIDERS
  ]
})
@Routes([
  { path: '/', component: HelloIonicPage },
  { path: '/items', component: ListPage },
  { path: '/items/:item', component: ItemDetailsPage },
])
class MyApp {
  // make HelloIonicPage the root (or first) page
  // rootPage: any;
  rootPage: any = HelloIonicPage;
  pages: Array<{ title: string, component: any }>;
  private logger: ILog;
  @ViewChild(Nav) nav: Nav;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    private loggerFactory: LoggerFactory,
    private router: Router,
    private location: Location
  ) {
    this.logger = loggerFactory.getInstance("app");
    this.initializeApp();
    this.logger.debug("ctor", "App initialized...");
    // set our app's pages
    
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // this.router.navigate(["/items"]);
      this.logger.debug(`initializeApp`, this.location.path());
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
