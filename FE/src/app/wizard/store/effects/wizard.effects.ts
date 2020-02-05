import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, withLatestFrom, switchMap, switchMapTo } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { WizardState } from '../wizard.state';
import { WizardService } from '../../../shared/services/wizard.service';

import * as MasterDataActions from '../actions/master.data.actions';
import * as CustomerActions from '../actions/customer.actions';

@Injectable()
export class WizardEffects {
  constructor(
    private actions$: Actions,
    private store: Store<WizardState>,
    private wizardService: WizardService
  ) { }

  loadWizardMasterData$ = createEffect(() => this.actions$.pipe(
    ofType(MasterDataActions.load),
    mergeMap(() => this.wizardService.getMasterData().pipe(
      map(masterData => masterData),
    )),
    mergeMap((masterData) => [
      MasterDataActions.loadComplete({ payload: masterData }),
    ]),
    catchError(() => EMPTY)
  ));

  searchCustomerByNIC$ = createEffect(() => this.actions$.pipe(
    ofType(CustomerActions.searchStart),
    map(nic => nic.payload),
    mergeMap((nic) => this.wizardService.getCustomerByNIC(nic).pipe(
      map(customer => customer),
    )),
    mergeMap((customer) => [
      CustomerActions.searchComplete({ payload: customer }),
    ]),
    catchError(() => EMPTY)
  ));
}
