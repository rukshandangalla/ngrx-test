import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WizardState } from 'src/app/shared/models/wizard-state';
import { Customer } from 'src/app/shared/models/customer';
import { getCustomer } from '../wizard.selector';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<WizardState>) {
    this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() {}
}
