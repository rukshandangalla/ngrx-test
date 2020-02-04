import { CustomerActionUnion, CustomerActionTypes } from '../actions/customer.actions';

export const CustomerReducer = (state = null, action: CustomerActionUnion) => {
  switch (action.type) {
    case CustomerActionTypes.Search:
      return { ...state, ...action.payload };
    case CustomerActionTypes.Reset:
      state = null;
      return state;
    default:
      return state;
  }
};
