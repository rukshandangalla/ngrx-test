import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Customer } from '../../../shared/models/customer';
import { WizardState } from '../../store/wizard.state';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  products: Product[];
  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<WizardState>) {
    // this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() {

  }

  onProductChange(evt) {
    // this.store.dispatch(new AddProductAction(evt.value));
  }
}
