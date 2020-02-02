import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';

import { MasterDataState } from './store/reducers/master.data.reducer';
import * as MasterDataAction from './store/actions/master.data.actions';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {
  items: MenuItem[];
  activeIndex = 0;

  ngOnInit() {
    this.items = [
      { label: 'Validate Customer', command: (event: any) => { this.activeIndex = 0; } },
      { label: 'Article Details', command: (event: any) => { this.activeIndex = 1; } },
      { label: 'Terms & Conditions', command: (event: any) => { this.activeIndex = 2; } },
      { label: 'Summary', command: (event: any) => { this.activeIndex = 3; } }
    ];

    // Loading Master Data
    this.store.dispatch(MasterDataAction.load());
  }

  constructor(private store: Store<MasterDataState>) { }

  onPrevious(evt: any): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  onNext(evt: any): void {
    if (this.activeIndex < 3) {
      this.activeIndex++;
    }
  }
}
