import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

//Pipe applied to the list of accounts loop to handle sorting via account number or available funds
@Pipe({
  name: 'accountOrder',
})
export class AccountOrderPipe implements PipeTransform {
  transform(accounts: any, sorter: number) {

    //sorter 1 = account number, 2 account number descending, 3 is available cash, 4 is available cash descending
    if (sorter == 1) {
      return _.sortBy(accounts, ['accountNumber']);
    } 
    if (sorter == 2) {
      var temp1 = _.sortBy(accounts, ['accountNumber']);
      return _.reverse(temp1);
    } 
    if (sorter == 3) {
      return _.sortBy(accounts, ['today']);
    } 
    if (sorter == 4) {
      var temp2 = _.sortBy(accounts, ['today']);
      return _.reverse(temp2);
    }
  }
}
