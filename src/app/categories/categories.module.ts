import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { CategoriesRoutingModule } from "./categories-routing.module";
import { CategoriesComponent } from "./categories.component";

import { ModalViewComponent } from "./modal-view" 
import { BrandViewComponent } from "./brand-view";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CategoriesRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CategoriesComponent,
        BrandViewComponent,
        ModalViewComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalViewComponent,BrandViewComponent]
})
export class CategoriesModule { }
