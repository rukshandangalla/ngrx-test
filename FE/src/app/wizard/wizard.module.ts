import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { WizardComponent } from './wizard.component';

import { CustomerComponent } from './components/customer/customer.component';
import { ArticleComponent } from './components/article/article.component';
import { TermsComponent } from './components/terms/terms.component';
import { SummaryComponent } from './components/summary/summary.component';

import { WizardState } from '../shared/models/wizard.state';

import { CustomerReducer } from './store/reducers/customer.reducer';
import { ArticleReducer } from './store/reducers/article.reducer';
import { ProductReducer } from './store/reducers/product.reducer';

import { CustomerReducerRev } from './store/reducers/customer.reducer.revamped';

const wizardRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: WizardComponent
  }
]);

export const reducers: ActionReducerMap<WizardState> = {
  selectedCustomer: CustomerReducerRev,
  selectedArticle: ArticleReducer,
  selectedProduct: ProductReducer
};

@NgModule({
  declarations: [WizardComponent, CustomerComponent, ArticleComponent, TermsComponent, SummaryComponent],
  imports: [SharedModule, StoreModule.forFeature('wizard', reducers), wizardRouting]
})
export class WizardModule { }
