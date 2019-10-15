import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CustomerActionUnion, CustomerActionTypes } from './wizard/actions/customer.actions';
import { AppState } from './shared/models/app-state';

const CustomerReducer = (state = null, action: CustomerActionUnion) => {
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

const rootRouting: ModuleWithProviders = RouterModule.forRoot(
  [
    {
      path: '',
      loadChildren: () => import('./wizard/wizard.module').then(m => m.WizardModule)
    }
  ],
  { useHash: true }
);

export const reducers: ActionReducerMap<AppState> = {
  selectedCustomer: CustomerReducer
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot(reducers),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    rootRouting,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
