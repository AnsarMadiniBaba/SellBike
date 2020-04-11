import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
    AuthGuard
  ];
  export const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "productdetails", loadChildren: () => import("~/app/productdetails/productdetails.module").then((m) => m.ProductdetailsModule) },
    { path: "login", loadChildren: () => import("~/app/login/login.module").then((m) => m.LoginModule) },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule)},
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "deatils", loadChildren: () => import("~/app/deatils/deatils.module").then((m) => m.DeatilsModule) },
    { path: "categories", loadChildren: () => import("~/app/categories/categories.module").then((m) => m.CategoriesModule) },
    { path: "postad", loadChildren: () => import("~/app/postad/postad.module").then((m) => m.PostadModule) },
    { path: "filter", loadChildren: () => import("~/app/filter/filter.module").then((m) => m.FilterModule) }
   ];
   @NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})

export class AppRoutingModule { }
