import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WizardState } from '../shared/models/wizard-state';

const getWizard = createFeatureSelector('wizard');

export const getCustomer = createSelector(
  getWizard,
  (state: WizardState) => state.selectedCustomer
);

export const getArticle = createSelector(
  getWizard,
  (state: WizardState) => state.selectedArticle
);

export const getProduct = createSelector(
  getWizard,
  (state: WizardState) => state.selectedProduct
);
