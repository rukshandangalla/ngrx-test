import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../shared/models/customer';

export const searchCustomerAction = createAction(
  '[Customer] Search',
  props<{ customer: Customer }>()
);

export const resetCustomerAction = createAction('[Customer] Reset');

export const getCustomerAction = createAction('[Customer] Get');
