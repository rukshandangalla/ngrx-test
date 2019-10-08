import { Component, OnInit } from "@angular/core";

import { Customer } from "../../shared/models/customer";
import { ArticleMainType } from "../../shared/models/article-main-type";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  articleMainTypes: ArticleMainType[];
  customer: Customer;

  constructor() {}

  ngOnInit() {
    this.articleMainTypes = [
      { id: 1, code: "01", description: "Anklet", isActive: true },
      { id: 2, code: "02", description: "Chain", isActive: true },
      { id: 3, code: "03", description: "Ring", isActive: true },
      { id: 4, code: "04", description: "Bangle", isActive: true },
      { id: 5, code: "05", description: "Bracelet", isActive: true },
      { id: 6, code: "06", description: "Coin", isActive: true }
    ];

    this.customer = {
      fName: "Rukshan",
      lName: "Dangalla",
      age: 30,
      nic: "883123549V",
      address: "25/A First Lane, Maharagama"
    };
  }
}
