import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Customer } from '../../../shared/models/customer';
import { WizardState } from 'src/app/shared/models/wizard-state';
import { getCustomer } from '../../wizard.selector';
import { Product } from 'src/app/shared/models/product';
import { AddProductAction } from '../../store/actions/product.actions';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  products: Product[];
  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<WizardState>) {
    this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() {
    this.products = [
      {
        code: '01',
        name: 'Normal'
      },
      {
        code: '02',
        name: 'Step-up'
      },
      {
        code: '03',
        name: 'Schedule Stepup'
      }
    ];
  }

  onProductChange(evt) {
    this.store.dispatch(new AddProductAction(evt.value));
  }
}
