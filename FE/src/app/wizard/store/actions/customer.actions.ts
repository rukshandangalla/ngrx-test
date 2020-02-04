import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../shared/models/customer';

export const searchCustomer = createAction(
  '[Customer] Search',
  props<{ payload: Customer }>()
);

export const resetCustomer = createAction('[Customer] Reset');
