import { AccountOrderPipe } from '../../pipes/account-order/account-order';
import { DataProvider } from '../../providers/data/data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.data = dataProvider.getData();
    this.sorter = 1;
    this.viewMore = false;
    this.viewText = 'View More';
    this.accountArrow = '˄';
  }

  data: any;
  sorter: number;
  viewMore: boolean;
  viewText: string;
  accountArrow: string;
  cashArrow: string;

  //Reminder for sorting: 1 and 2 are for by account (ascending and descending), 3 and 4 are for by available funds (ascending and descending)

  accountSort() {
    if (this.sorter == 1) {
        this.sorter = 2;
        this.accountArrow = '˅';
    } else {
        this.sorter = 1;
        this.accountArrow = '˄';
        this.cashArrow = ' ';
    }
  }

  availableSort() {
    if (this.sorter == 3) {
        this.sorter = 4;
        this.cashArrow = '˅';
    } else {
        this.sorter = 3;
        this.cashArrow = '˄';
        this.accountArrow = ' ';
    }
  }

  viewButton() {
      this.viewMore = !this.viewMore;
      if (this.viewMore) {
          this.viewText = 'View Less';
      } else {
          this.viewText = 'View More';
      }
  }
}