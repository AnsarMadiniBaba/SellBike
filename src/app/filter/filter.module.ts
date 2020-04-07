import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { FilterRoutingModule } from "./filter-routing.module";
import { FilterComponent } from "./filter.component";
import { NativeScriptUIRangeSeekBarModule } from "nativescript-range-seek-bar/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FilterRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptUIRangeSeekBarModule
    ],
    declarations: [
        FilterComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FilterModule { }
