import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import { Customer } from "../../shared/models/customer";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.css"]
})
export class TermsComponent implements OnInit {
  selectedCustomer: Observable<Customer>;

  constructor(private store: Store<{ customer: Customer }>) {
    this.selectedCustomer = store.pipe(select('wizard'));
  }

  ngOnInit() {}
}
