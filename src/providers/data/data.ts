import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
  constructor() {
  }

  //This provider is what would normally query the server api for the information.  However, only dummy information is being provided.  This can be expanded on indefinately.

  data: object = 
  {
    "accounts": [
      {
        "name": "IRA",
        "accountNumber": 7483,
        "today": 52976.23,
        "yesterday": 54687.21
      },
      {
        "name": "IRA",
        "accountNumber": 9462,
        "today": 9862523.11,
        "yesterday": 9767852.36
      },
      {
        "name": "REG",
        "accountNumber": 6857,
        "today": 102.36,
        "yesterday": 101.58
      },
      {
        "name": "REG",
        "accountNumber": 1937,
        "today": 32596471.20,
        "yesterday": 32495867.85
      },
      {
        "name": "AAA",
        "accountNumber": 7685,
        "today": 5768.77,
        "yesterday": 5768.77
      },
      {
        "name": "BBB",
        "accountNumber": 1237,
        "today": 983527.85,
        "yesterday": 985863.85
      },
      {
        "name": "CCC",
        "accountNumber": 9846,
        "today": 374859.89,
        "yesterday": 397843.08
      }
    ]
  }
  
  getData(): object {
    return this.data;
  }
}
