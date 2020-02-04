import { Action, createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/product.actions';
import { Product } from '../../../shared/models/product';

export interface ProductState {
  selectedProduct: Product;
}

const initialState: ProductState = {
  selectedProduct: null
};

const reducer = createReducer(
  initialState,
  on(ProductActions.addProduct, (state, { payload: product }) => {
    return { ...state, selectedProduct: product };
  })
);

export function ProductReducer(state: ProductState | undefined, action: Action) {
  return reducer(state, action);
}
