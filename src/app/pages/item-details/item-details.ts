import {Page, NavController, NavParams} from "ionic-angular";
import consts from "../../app.const";

@Page({
  templateUrl: `${consts.basePath}/pages/item-details/item-details.html`
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get("item");
  }
}
