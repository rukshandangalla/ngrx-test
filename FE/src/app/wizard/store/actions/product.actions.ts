import { createAction, props } from '@ngrx/store';
import { Product } from '../../../shared/models/product';

export const add = createAction(
  '[Product] Select',
  props<{ payload: Product }>()
);

export const reset = createAction('[Product] Reset');
