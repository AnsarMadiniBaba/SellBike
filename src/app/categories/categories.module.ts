import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesComponent } from "./categories.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CategoriesRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CategoriesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CategoriesModule { }
