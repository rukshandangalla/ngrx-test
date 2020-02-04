import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Customer } from '../../../shared/models/customer';
import { ArticleMainType } from '../../../shared/models/article.main.type';
import { WizardState } from '../../store/wizard.state';
import { MasterDataState } from '../../store/reducers/master.data.reducer';

import * as WizardSelectors from '../../store/selectors/wizard.selector';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  masterDataState$: Observable<MasterDataState>;
  articleMainTypes: ArticleMainType[];

  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<WizardState>) {
    this.masterDataState$ = this.store.select(WizardSelectors.getMasterDataState);
  }

  ngOnInit() {
  }

  onArticleChange(evt: any) {
    // this.store.dispatch(new AddArticleAction(evt.value));
  }
}
