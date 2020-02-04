import { createReducer, on, Action } from '@ngrx/store';
import * as CustomerActions from '../actions/customer.actions';
import { Customer } from 'src/app/shared/models/customer';

export interface CustomerState {
  selectedCustomer: Customer;
}

const initialState: CustomerState = {
  selectedCustomer: null
};

const reducer = createReducer(
  initialState,
  on(CustomerActions.searchCustomer, (state, { payload: customer }) => {
    console.log(customer);
    return {
      ...state, ...customer
    };
  }),
  on(CustomerActions.resetCustomer, (state) => {
    state = null;
    return state;
  })
);

export function CustomerReducer(state: CustomerState | undefined, action: Action) {
  return reducer(state, action);
}
