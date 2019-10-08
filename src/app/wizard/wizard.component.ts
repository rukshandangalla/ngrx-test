import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class WizardComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;

  ngOnInit() {
    this.items = [
      {
        label: "Validate Customer",
        command: (event: any) => {
          this.activeIndex = 0;
        }
      },
      {
        label: "Article Details",
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: "Terms & Conditions",
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: "Summary",
        command: (event: any) => {
          this.activeIndex = 3;
        }
      }
    ];
  }

  constructor() {}

  onPrevious(evt): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  onNext(evt): void {
    if (this.activeIndex < 3) {
      this.activeIndex++;
    }
  }
}
