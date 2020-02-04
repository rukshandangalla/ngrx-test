import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as WizardSelectors from '../../store/selectors/wizard.selector';
import { WizardState } from '../../store/wizard.state';
import { CustomerState } from '../../store/reducers/customer.reducer';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  customerState$: Observable<CustomerState>;

  constructor(private store: Store<WizardState>) {
    this.customerState$ = this.store.select(WizardSelectors.getCustomerState);
  }

  ngOnInit() { }
}
