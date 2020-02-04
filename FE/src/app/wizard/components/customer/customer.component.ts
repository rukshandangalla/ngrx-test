import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Customer } from '../../../shared/models/customer';
import { WizardState } from 'src/app/shared/models/wizard.state';
import { SearchCustomerAction, ResetCustomerAction } from '../../store/actions/customer.actions';
import { ResetArticleAction } from '../../store/actions/article.actions';

import * as CustomerActions from '../../store/actions/customer.actions.revamped';

import { getCustomer } from '../../wizard.selector';

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

  ngOnInit() { }

  onNicSearch(): void {
    const customer: Customer = this.customerList.find(cl => cl.nic === this.selectedNic);
    // this.store.dispatch(new SearchCustomerAction(customer));
    this.store.dispatch(CustomerActions.searchCustomerAction({ customer }));
  }

  onReset() {
    this.selectedNic = '';
    this.store.dispatch(new ResetCustomerAction());
    // this.store.dispatch(new ResetArticleAction());
  }

  onSearchTypeChange(evt: any) {

  }
}
