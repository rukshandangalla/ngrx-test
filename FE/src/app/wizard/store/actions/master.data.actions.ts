import { createAction, props } from '@ngrx/store';
import { MasterData } from '../../../shared/models/master.data';

// This action trigger the load
export const load = createAction('[MasterData] Load');

// Once load complete, this action getting dispached
export const loadComplete = createAction(
    '[MasterData] LoadComplete',
    props<{ payload: MasterData }>()
);
