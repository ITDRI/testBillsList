import {Injectable} from '@angular/core';
import {Bill} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  initialStore: Bill[] = [{
    billNumber: '256',
    billTotal: 15954,
    created: 1623925061116,
    paymentMethod: "debitСard",
    status: "new",
    updated: 1623925061116,
  },
  {
    billNumber: '314',
    billTotal: 32685,
    created: 1623925167598,
    paymentMethod: "debitСard",
    status: "paid",
    updated: 1623925167598,
  },
  {
    billNumber: '17',
    billTotal: 2826,
    created: 1623925281523,
    paymentMethod: "creditCard",
    status: "canceled",
    updated: 1623925281523,
  },
  {
    billNumber: '312',
    billTotal: 95682,
    created: 1623925281523,
    paymentMethod: "elCheck",
    status: "new",
    updated: 1623925281523,
  }
  ]

  store: Bill[] = JSON.parse(localStorage.getItem('billsList')) || this.initialStore

  constructor () { }

  getAll() {
    return this.store
  }

  create(bill: Bill) {
    this.store.push(bill)
    localStorage.setItem('billsList', JSON.stringify(this.store));
  }

}
