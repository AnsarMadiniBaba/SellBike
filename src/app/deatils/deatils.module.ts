import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { DeatilsRoutingModule } from "./deatils-routing.module";
import { DeatilsComponent } from "./deatils.component";
import { ModalViewComponent } from "./modal-view" 
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DeatilsRoutingModule,
        NativeScriptUIListViewModule, 
        NativeScriptUIDataFormModule
    ],
    declarations: [
        DeatilsComponent,
        ModalViewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalViewComponent]
})
export class DeatilsModule { }
