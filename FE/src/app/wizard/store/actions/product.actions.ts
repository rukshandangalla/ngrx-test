import { createAction, props } from '@ngrx/store';
import { Product } from '../../../shared/models/product';

export const addProduct = createAction(
  '[Product] Select',
  props<{ payload: Product }>()
);
