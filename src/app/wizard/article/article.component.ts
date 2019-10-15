import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Customer } from '../../shared/models/customer';
import { ArticleMainType } from '../../shared/models/article-main-type';
import { AppState } from 'src/app/shared/models/app-state';
import { getCustomer } from '../wizard.selector';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleMainTypes: ArticleMainType[];

  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<AppState>) {
    this.selectedCustomer = this.store.select(getCustomer);
  }

  ngOnInit() {
    this.articleMainTypes = [
      {
        id: 1,
        code: '01',
        description: 'Anklet',
        isActive: true
      },
      {
        id: 2,
        code: '02',
        description: 'Chain',
        isActive: true
      },
      {
        id: 3,
        code: '03',
        description: 'Ring',
        isActive: true
      },
      {
        id: 4,
        code: '04',
        description: 'Bangle',
        isActive: true
      },
      {
        id: 5,
        code: '05',
        description: 'Bracelet',
        isActive: true
      },
      {
        id: 6,
        code: '06',
        description: 'Coin',
        isActive: true
      }
    ];
  }
}
