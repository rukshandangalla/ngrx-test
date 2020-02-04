import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WizardState } from '../wizard.state';

const getWizard = createFeatureSelector('wizard');

export const getMasterDataState = createSelector(
  getWizard,
  (state: WizardState) => state.masterDataState
);

export const getCustomerState = createSelector(
  getWizard,
  (state: WizardState) => state.customerState
);

export const getArticleState = createSelector(
  getWizard,
  (state: WizardState) => state.articleState
);

export const getProductState = createSelector(
  getWizard,
  (state: WizardState) => state.productState
);
