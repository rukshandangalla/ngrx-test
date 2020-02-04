import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as WizardSelectors from '../../store/selectors/wizard.selector';

import { WizardState } from '../../store/wizard.state';
import { CustomerState } from '../../store/reducers/customer.reducer';
import { ArticleState } from '../../store/reducers/article.reducer';
import { ProductState } from '../../store/reducers/product.reducer';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  customerState$: Observable<CustomerState>;
  articleState$: Observable<ArticleState>;
  productState$: Observable<ProductState>;

  constructor(private store: Store<WizardState>) {
    this.customerState$ = this.store.select(WizardSelectors.getCustomerState);
    this.articleState$ = this.store.select(WizardSelectors.getArticleState);
    this.productState$ = this.store.select(WizardSelectors.getProductState);
  }

  ngOnInit() { }
}
