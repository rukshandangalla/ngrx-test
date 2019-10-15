import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Customer } from '../../shared/models/customer';
import { WizardState } from 'src/app/shared/models/wizard-state';
import { SearchCustomerAction, ResetCustomerAction } from '../actions/customer.actions';
import { getCustomer } from '../wizard.selector';

// const selectCustomer = (customerList, selectedNic) => ({
//   type: 'SEARCH',
//   payload: customerList.find(cl => cl.nic === selectedNic)
// });
// const resetCustomer = () => ({
//   type: 'RESET'
// });

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  selectedCustomer: Observable<Customer>;
  selectedNic: string;
  customerList: Customer[] = [
    {
      fName: 'Rukshan',
      lName: 'Dangalla',
      age: 25,
      nic: '1V',
      address: 'Maharagama'
    },
    {
      fName: 'Maheesha',
      lName: 'Prasadi',
      age: 27,
      nic: '2V',
      address: 'Boralasgamuwa'
    },
    {
      fName: 'Chathuranga',
      lName: 'Basnayake',
      age: 23,
      nic: '3V',
      address: 'Homagama'
    },
    {
      fName: 'Pubudu',
      lName: 'Chathuranga',
      age: 27,
      nic: '4V',
      address: 'Nugegoda'
    }
  ];

  constructor(private store: Store<WizardState>) {
    this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() {}

  onNicSearch(): void {
    // this.store.dispatch(selectCustomer(this.customerList, this.selectedNic));
    const customer = this.customerList.find(cl => cl.nic === this.selectedNic);
    this.store.dispatch(new SearchCustomerAction(customer));
  }

  onReset() {
    this.store.dispatch(new ResetCustomerAction());
  }
}
