import { createReducer, on, Action } from '@ngrx/store';
import * as CustomerActions from '../actions/customer.actions.revamped';
import { Customer } from 'src/app/shared/models/customer';

const initialState: Customer = null;

const reducer = createReducer(
  initialState,
  on(CustomerActions.searchCustomerAction, (state, { customer }) => {
    console.log(customer);
    return {
      ...state, ...customer
    };
  }),
  on(CustomerActions.resetCustomerAction, (state) => {
    state = null;
    return state;
  })
);

export function CustomerReducerRev(state: any, action: Action) {
  return reducer(state, action);
}
