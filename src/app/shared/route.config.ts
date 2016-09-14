import { DeepLinkConfig } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from "../pages/contact/contact";


export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: HomePage, name: 'home' },
    { component: TabsPage, name: 'tabs' },
    { component: ContactPage, name: 'contact' },
    { component: AboutPage, name: 'about' }
  ]
};
