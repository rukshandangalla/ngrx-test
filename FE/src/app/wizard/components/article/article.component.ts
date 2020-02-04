import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as WizardSelectors from '../../store/selectors/wizard.selector';

import { WizardState } from '../../store/wizard.state';
import { MasterDataState } from '../../store/reducers/master.data.reducer';
import { CustomerState } from '../../store/reducers/customer.reducer';
import { ArticleState } from '../../store/reducers/article.reducer';

import * as ArticleActions from '../../store/actions/article.actions';
import { ArticleMainType } from 'src/app/shared/models/article.main.type';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  selectedArticle: ArticleMainType;

  masterDataState$: Observable<MasterDataState>;
  customerState$: Observable<CustomerState>;
  articleState$: Observable<ArticleState>;

  constructor(private store: Store<WizardState>) {
    this.masterDataState$ = this.store.select(WizardSelectors.getMasterDataState);
    this.customerState$ = this.store.select(WizardSelectors.getCustomerState);
    this.articleState$ = this.store.select(WizardSelectors.getArticleState);
  }

  ngOnInit() {
    this.articleState$.subscribe(data => {
      this.selectedArticle = data.selectedArticle;
    });
  }

  onArticleChange(evt: any) {
    this.store.dispatch(ArticleActions.add({ payload: evt.value }));
  }
}
