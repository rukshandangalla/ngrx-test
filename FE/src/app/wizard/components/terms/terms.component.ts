import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Customer } from '../../../shared/models/customer';
import { WizardState } from '../../store/wizard.state';
import { Product } from 'src/app/shared/models/product';

import { MasterDataState } from '../../store/reducers/master.data.reducer';

import * as WizardSelectors from '../../store/selectors/wizard.selector';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  products: Product[];
  selectedCustomer: Observable<Customer>;
  masterDataState$: Observable<MasterDataState>;

  constructor(private store: Store<WizardState>) {
    this.masterDataState$ = this.store.select(WizardSelectors.getMasterDataState);
  }

  ngOnInit() {
  }

  onProductChange(evt) {
    // this.store.dispatch(new AddProductAction(evt.value));
  }
}
