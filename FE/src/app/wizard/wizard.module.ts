import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import { WizardComponent } from './wizard.component';

import { CustomerComponent } from './components/customer/customer.component';
import { ArticleComponent } from './components/article/article.component';
import { TermsComponent } from './components/terms/terms.component';
import { SummaryComponent } from './components/summary/summary.component';

import { WizardEffects } from './store/effects/wizard.effects';
import { WizardState } from './store/wizard.state';

import { MasterDataReducer } from './store/reducers/master.data.reducer';
import { CustomerReducer } from './store/reducers/customer.reducer';
import { ArticleReducer } from './store/reducers/article.reducer';
import { ProductReducer } from './store/reducers/product.reducer';

const wizardRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: WizardComponent
  }
]);

export const reducers: ActionReducerMap<WizardState> = {
  masterDataState: MasterDataReducer,
  customerState: CustomerReducer,
  articleState: ArticleReducer,
  productState: ProductReducer
};

@NgModule({
  declarations: [WizardComponent, CustomerComponent, ArticleComponent, TermsComponent, SummaryComponent],
  imports: [
    SharedModule,
    StoreModule.forFeature('wizard', reducers),
    EffectsModule.forFeature([WizardEffects]),
    wizardRouting
  ]
})
export class WizardModule { }
