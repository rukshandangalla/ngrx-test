import { createReducer, on, Action } from '@ngrx/store';
import { MasterData } from '../../../shared/models/master.data';

import * as MasterDataAction from '../actions/master.data.actions';

export interface MasterDataState {
  isLoading: boolean;
  masterData: MasterData;
}

const initialState: MasterDataState = {
  isLoading: false,
  masterData: null
};

const reducer = createReducer(
  initialState,
  on(MasterDataAction.load, (state) => {
    return { ...state, isLoading: true };
  }),
  on(MasterDataAction.loadComplete, (state, { payload }) => {
    return { ...state, isLoading: false, masterData: payload };
  }),
);

export function MasterDataReducer(state: MasterDataState | undefined, action: Action) {
  return reducer(state, action);
}
