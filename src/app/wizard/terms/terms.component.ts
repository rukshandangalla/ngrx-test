import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Customer } from '../../shared/models/customer';
import { WizardState } from 'src/app/shared/models/wizard-state';
import { getCustomer } from '../wizard.selector';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<WizardState>) {
    this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() {}
}
