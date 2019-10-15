import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../shared/models/app-state';

const getWizard = createFeatureSelector('wizard');

export const getCustomer = createSelector(
  getWizard,
  (state: AppState) => state.selectedCustomer
);
