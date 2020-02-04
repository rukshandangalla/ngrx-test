import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { mergeMap, map, catchError, withLatestFrom, switchMap, switchMapTo } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { WizardState } from '../wizard.state';
import { WizardService } from '../../../shared/services/wizard.service';
import * as MasterDataAction from '../actions/master.data.actions';

@Injectable()
export class WizardEffects {
  constructor(
    private actions$: Actions,
    private store: Store<WizardState>,
    private wizardService: WizardService
  ) { }

  loadWizardMasterData$ = createEffect(() => this.actions$.pipe(
    ofType(MasterDataAction.load),
    mergeMap(() => this.wizardService.getMasterData().pipe(
      map(masterData => masterData),
    )),
    mergeMap((masterData) => [
      MasterDataAction.loadComplete({ payload: masterData }),
    ]),
    catchError(() => EMPTY)
  ));
}
