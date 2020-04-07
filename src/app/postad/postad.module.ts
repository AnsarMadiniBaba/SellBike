import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PostadRoutingModule } from "./postad-routing.module";
import { PostadComponent } from "./postad.component";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PostadRoutingModule, 
        NativeScriptUIDataFormModule
    ],
    declarations: [
        PostadComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PostadModule { }
