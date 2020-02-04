import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { PrimeNgModule } from "./prime-ng.module";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, PrimeNgModule],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, PrimeNgModule],
  declarations: []
})
export class SharedModule {}
