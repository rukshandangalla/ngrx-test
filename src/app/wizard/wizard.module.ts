import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

import { WizardComponent } from './wizard.component';

import { CustomerComponent } from './customer/customer.component';
import { ArticleComponent } from './article/article.component';
import { TermsComponent } from './terms/terms.component';
import { SummaryComponent } from './summary/summary.component';

import { WizardState } from '../shared/models/wizard-state';
import { CustomerReducer } from './reducers/customer.reducer';

const wizardRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: WizardComponent
  }
]);

export const reducers: ActionReducerMap<WizardState> = {
  selectedCustomer: CustomerReducer
};

@NgModule({
  declarations: [WizardComponent, CustomerComponent, ArticleComponent, TermsComponent, SummaryComponent],
  imports: [SharedModule, StoreModule.forFeature('wizard', reducers), wizardRouting]
})
export class WizardModule {}
