import { Action } from '@ngrx/store';
import { Customer } from '../../../shared/models/customer';

export enum CustomerActionTypes {
  Search = '[Customer] Search',
  Get = '[Customer] Get',
  Reset = '[Customer] Reset'
}

export class SearchCustomerAction implements Action {
  readonly type = CustomerActionTypes.Search;
  constructor(public payload: Customer) {}
}

export class ResetCustomerAction implements Action {
  readonly type = CustomerActionTypes.Reset;
  constructor() {}
}

export class GetCustomerAction implements Action {
  readonly type = CustomerActionTypes.Get;
}

export type CustomerActionUnion = SearchCustomerAction | ResetCustomerAction | GetCustomerAction;
