import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../shared/models/customer';

export const searchStart = createAction(
  '[Customer] Search',
  props<{ payload: string }>()
);

export const searchComplete = createAction(
  '[Customer] SearchComplete',
  props<{ payload: Customer }>()
);

export const reset = createAction('[Customer] Reset');
