import { ProductActionTypes, ProductActionUnion } from '../actions/product.actions';

export const ProductReducer = (state = null, action: ProductActionUnion) => {
  switch (action.type) {
    case ProductActionTypes.Select:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
