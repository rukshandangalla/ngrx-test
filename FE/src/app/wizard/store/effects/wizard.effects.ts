import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { WizardState } from '../wizard.state';
import { WizardService } from '../../../shared/services/wizard.service';

@Injectable()
export class WizardEffects {
  constructor(
    private actions$: Actions,
    private store: Store<WizardState>,
    private wizardService: WizardService
  ) { }
}
