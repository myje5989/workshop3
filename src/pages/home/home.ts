import { MenuCha } from './../../models/menuscha';
import { BeverageServiceProvider } from './../../providers/beverage-service/beverage-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuCha: MenuCha[];
  sub: Subscription;

  constructor(public navCtrl: NavController,private beverageServiceProvider:BeverageServiceProvider) {
  //this.getData();
  }

  private getData() {
this.sub = this.beverageServiceProvider.getAllData().subscribe(
  (menuCha: MenuCha[]) => this.menuCha = menuCha

);
  }
  ionViewWillEnter() {
    this.getData();
  }
  ionViewWillLeave() {
    this.sub.unsubscribe();
  }
}
