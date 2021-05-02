import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { authProviders, AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";

import { BackendService } from "./services/backend.service";
import { LoginService, DashboardService} from "./services";
import { MyadsComponent } from './myads/myads.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    providers: [
        BackendService,
        LoginService,
        authProviders,
        DashboardService
      ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        HttpClientModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        MyadsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
