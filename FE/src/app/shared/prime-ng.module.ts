import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { AccordionModule } from "primeng/accordion";
import { SidebarModule } from "primeng/sidebar";
import { MenuModule } from "primeng/menu";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { TabViewModule } from "primeng/tabview";
import { MessageModule } from "primeng/message";
import { CalendarModule } from "primeng/calendar";
import { GrowlModule } from "primeng/growl";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputMaskModule } from "primeng/inputmask";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PanelMenuModule } from "primeng/panelmenu";
import { AutoCompleteModule } from "primeng/autocomplete";
import { ProgressBarModule } from "primeng/progressbar";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { BlockUIModule } from "primeng/blockui";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { FieldsetModule } from "primeng/fieldset";
import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { LightboxModule } from "primeng/lightbox";
import { ToastModule } from "primeng/toast";
import { StepsModule } from "primeng/steps";
@NgModule({
  imports: [CommonModule],
  exports: [
    InputTextModule,
    ButtonModule,
    AccordionModule,
    SidebarModule,
    MenuModule,
    ConfirmDialogModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    TabViewModule,
    MessageModule,
    GrowlModule,
    InputSwitchModule,
    FileUploadModule,
    InputTextareaModule,
    PanelMenuModule,
    AutoCompleteModule,
    ProgressBarModule,
    InputMaskModule,
    PanelModule,
    ScrollPanelModule,
    LightboxModule,
    BlockUIModule,
    TooltipModule,
    TableModule,
    FieldsetModule,
    OverlayPanelModule,
    ToastModule,
    StepsModule
  ],
  providers: [ConfirmationService]
})
export class PrimeNgModule {}