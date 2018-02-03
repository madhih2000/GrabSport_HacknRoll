import {Component} from "@angular/core";
import {NavController, PopoverController, AlertController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {TeaIngredientPage} from "../TeaIngredientPage/TeaIngredientpage";
import {SearchLocationPage} from "../search-location/search-location";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public find = {
    beverage: "Tea",
    sugar: "No Sugar",
    strength: "Thick",
    temperature: "Hot"
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  } 


 ionViewWillEnter() {
    this.storage.get('beverage').then((val) => {
      if (val === null) {
        this.find.beverage = "Tea"
      } else {
        this.find.beverage = val;
      }
    }).catch((err) => {
      console.log(err)
    });

    this.storage.get('sugar').then((val) => {
      if (val === null) {
        this.find.sugar = "No Sugar"
      } else {
        this.find.sugar = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  
  }
  
 //choose tea
 chooseTea() {
this.nav.push(TripsPage);

}

 chooseCoffee() {
console.log('crap');

 }


}

//
