import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { DeatilsRoutingModule } from "./deatils-routing.module";
import { DeatilsComponent } from "./deatils.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DeatilsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        DeatilsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DeatilsModule { }
