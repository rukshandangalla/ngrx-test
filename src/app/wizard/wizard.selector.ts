import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WizardState } from '../shared/models/wizard-state';

const getWizard = createFeatureSelector('wizard');

export const getCustomer = createSelector(
  getWizard,
  (state: WizardState) => state.selectedCustomer
);
