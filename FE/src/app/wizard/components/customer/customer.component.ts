import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { WizardState } from '../../store/wizard.state';


import * as CustomerActions from '../../store/actions/customer.actions.revamped';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  selectedNic: string;

  constructor(private store: Store<WizardState>) {
    // this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() { }

  onNicSearch(): void {
    // const customer: Customer = this.customerList.find(cl => cl.nic === this.selectedNic);
    // this.store.dispatch(new SearchCustomerAction(customer));
    // this.store.dispatch(CustomerActions.searchCustomerAction({ customer }));
  }

  onReset() {
    this.selectedNic = '';
    // this.store.dispatch(new ResetCustomerAction());
    // this.store.dispatch(new ResetArticleAction());
  }

  onSearchTypeChange(evt: any) {

  }
}
