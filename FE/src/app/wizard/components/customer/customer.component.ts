import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, ActionsSubject } from '@ngrx/store';

import * as CustomerActions from '../../store/actions/customer.actions';

import { WizardState } from '../../store/wizard.state';
import { MasterDataState } from '../../store/reducers/master.data.reducer';
import { CustomerState } from '../../store/reducers/customer.reducer';

import * as WizardSelectors from '../../store/selectors/wizard.selector';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  selectedNic: string;

  masterDataState$: Observable<MasterDataState>;
  customerState$: Observable<CustomerState>;

  constructor(private store: Store<WizardState>, private action: ActionsSubject, ) {
    this.masterDataState$ = this.store.select(WizardSelectors.getMasterDataState);
    this.customerState$ = this.store.select(WizardSelectors.getCustomerState);
  }

  ngOnInit() {
    // Subscribe to customer state
    // this will trigger in every state change
    this.customerState$.subscribe(
      data => {
        // console.log(data);
      }
    );

    // Subscribe to specific action
    this.action.subscribe(
      action => {
        if (action && action.type && action.type === CustomerActions.searchComplete.type) {
          // console.log('SEARCH COMPLETED!');
        }
      }
    );
  }

  onNicSearch(): void {
    this.store.dispatch(CustomerActions.searStart({ payload: this.selectedNic }));
  }

  onReset() {
    this.selectedNic = '';
    this.store.dispatch(CustomerActions.reset());
  }

  onSearchTypeChange(evt: any) {
    console.log(evt);
  }
}
