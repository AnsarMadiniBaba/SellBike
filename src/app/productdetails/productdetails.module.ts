import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProductdetailsRoutingModule } from "./productdetails-routing.module";
import { ProductdetailsComponent } from "./productdetails.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProductdetailsRoutingModule
    ],
    declarations: [
        ProductdetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProductdetailsModule { }
