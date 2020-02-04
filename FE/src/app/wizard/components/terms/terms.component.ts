import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as WizardSelectors from '../../store/selectors/wizard.selector';

import { WizardState } from '../../store/wizard.state';
import { MasterDataState } from '../../store/reducers/master.data.reducer';
import { CustomerState } from '../../store/reducers/customer.reducer';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  masterDataState$: Observable<MasterDataState>;
  customerState$: Observable<CustomerState>;

  constructor(private store: Store<WizardState>) {
    this.masterDataState$ = this.store.select(WizardSelectors.getMasterDataState);
    this.customerState$ = this.store.select(WizardSelectors.getCustomerState);
  }

  ngOnInit() {
  }

  onProductChange(evt: any) {
    // this.store.dispatch(new AddProductAction(evt.value));
  }
}
