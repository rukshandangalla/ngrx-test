import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Customer } from '../../shared/models/customer';
import { AppState } from 'src/app/shared/models/app-state';
//import { SelectCustomer } from "../../shared/actions/wizard.actions";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  selectedNic: string;
  customerList: Customer[] = [
    {
      fName: 'Customer 1 fName',
      lName: 'Customer 1 lName',
      age: 25,
      nic: '1V',
      address: 'Customer 1 address'
    },
    {
      fName: 'Customer 2 fName',
      lName: 'Customer 2 lName',
      age: 27,
      nic: '2V',
      address: 'Customer 1 address'
    },
    {
      fName: 'Customer 3 fName',
      lName: 'Customer 3 lName',
      age: 23,
      nic: '3V',
      address: 'Customer 3 address'
    },
    {
      fName: 'Customer 4 fName',
      lName: 'Customer 4 lName',
      age: 27,
      nic: '4V',
      address: 'Customer 4 address'
    }
  ];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onNicSearch(): void {
    this.store.dispatch({
      type: 'ADD',
      payload: this.customerList.find(cl => cl.nic === this.selectedNic)
    });
  }
}
