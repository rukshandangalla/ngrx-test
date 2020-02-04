import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { WizardState } from '../../store/wizard.state';
import { MasterDataState } from '../../store/reducers/master.data.reducer';

import * as WizardSelectors from '../../store/selectors/wizard.selector';
import { CustomerState } from '../../store/reducers/customer.reducer';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  masterDataState$: Observable<MasterDataState>;
  customerState$: Observable<CustomerState>;

  constructor(private store: Store<WizardState>) {
    this.masterDataState$ = this.store.select(WizardSelectors.getMasterDataState);
    this.customerState$ = this.store.select(WizardSelectors.getCustomerState);
  }

  ngOnInit() {
  }

  onArticleChange(evt: any) {
    // this.store.dispatch(new AddArticleAction(evt.value));
  }
}
