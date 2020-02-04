import { createReducer, on, Action } from '@ngrx/store';
import * as CustomerActions from '../actions/customer.actions';
import { Customer } from 'src/app/shared/models/customer';

export interface CustomerState {
  selectedCustomer: Customer;
  isLoading: boolean;
  searchedNIC: string;
}

const initialState: CustomerState = {
  selectedCustomer: null,
  isLoading: false,
  searchedNIC: null
};

const reducer = createReducer(
  initialState,
  on(CustomerActions.searStart, (state, { payload: nic }) => {
    return { ...state, isLoading: true, searchedNIC: nic };
  }),
  on(CustomerActions.searchComplete, (state, { payload: customer }) => {
    return { ...state, isLoading: false, selectedCustomer: customer };
  }),
  on(CustomerActions.reset, (state) => {
    return { ...state, ...initialState };
  })
);

export function CustomerReducer(state: CustomerState | undefined, action: Action) {
  return reducer(state, action);
}
