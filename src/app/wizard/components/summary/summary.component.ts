import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WizardState } from 'src/app/shared/models/wizard-state';

import { Customer } from 'src/app/shared/models/customer';
import { ArticleMainType } from 'src/app/shared/models/article-main-type';
import { Product } from 'src/app/shared/models/product';

import { getCustomer, getArticle, getProduct } from '../../wizard.selector';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  selectedCustomer: Observable<Customer>;
  selectedArticle: Observable<ArticleMainType>;
  selectedProduct: Observable<Product>;

  constructor(private store: Store<WizardState>) {
    this.selectedCustomer = this.store.select(getCustomer);
    this.selectedArticle = this.store.select(getArticle);
    this.selectedProduct = this.store.select(getProduct);

    // this.store.subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit() {}
}
