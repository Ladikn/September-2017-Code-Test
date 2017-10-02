import { Component, Input } from '@angular/core';

/**
 * Generated class for the AccountComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'account',
  templateUrl: 'account.html'
})
export class AccountComponent {

  constructor() {
  }

  ngAfterViewInit() {
    this.difference = this.today - this.yesterday; 
    this.percentage = 1 - (this.today / this.yesterday);
    this.setColor();
    console.log(this.name);
    // console.log(this.difference);
    console.log(this.percentage);
  }

  @Input() name;
  @Input() accountNumber;
  @Input() today;
  @Input() yesterday;
  @Input() viewMore;
  @Input() i;

  difference: number; 
  percentage: number;

  color: string;
  positive: string;

  setColor() {
    if (this.percentage > 0) {
      this.color = "#006600";
      this.positive = "+";
    } else if (this.percentage < 0) {
      this.color = "#660000";
      this.positive = "";
    } else {
      this.color = "#444444"
      this.positive = "+";
    }
  }

}
