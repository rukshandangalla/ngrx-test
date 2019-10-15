import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

const CustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, ...action.payload };
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({
      customer: CustomerReducer
    }),
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
