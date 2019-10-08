import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";

import { WizardComponent } from "./wizard.component";

import { CustomerComponent } from './customer/customer.component';
import { ArticleComponent } from './article/article.component';
import { TermsComponent } from './terms/terms.component';
import { SummaryComponent } from './summary/summary.component';

const wizardRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: WizardComponent
  }
]);

@NgModule({
  declarations: [WizardComponent, CustomerComponent, ArticleComponent, TermsComponent, SummaryComponent],
  imports: [
    SharedModule,
    wizardRouting
  ]
})
export class WizardModule { }
