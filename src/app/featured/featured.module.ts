import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FeaturedRoutingModule } from "./featured-routing.module";
import { FeaturedComponent } from "./featured.component";

import { ModalViewComponent } from "./modal-view" 
import { FilterViewComponent } from "./filter-view";
import { NativeScriptUIRangeSeekBarModule } from "nativescript-range-seek-bar/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule,
        NativeScriptUIListViewModule,
        NativeScriptUIRangeSeekBarModule
    ],
    declarations: [
        FeaturedComponent,
        ModalViewComponent,
        FilterViewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalViewComponent,FilterViewComponent]
})
export class FeaturedModule { }
