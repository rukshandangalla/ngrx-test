import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Customer } from '../../../shared/models/customer';
import { ArticleMainType } from '../../../shared/models/article.main.type';
import { WizardState } from '../../store/wizard.state';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleMainTypes: ArticleMainType[];

  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<WizardState>) {
    // this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() {

  }

  onArticleChange(evt: any) {
    // this.store.dispatch(new AddArticleAction(evt.value));
  }
}
