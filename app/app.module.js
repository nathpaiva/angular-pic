"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var app_component_1 = require("./app.component");
var photo_module_1 = require("./photo/photo.module");
var panel_module_1 = require("./panel/panel.module");
var action_module_1 = require("./action/action.module");
var list_component_1 = require("./list/list.component");
var register_component_1 = require("./register/register.component");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            photo_module_1.PhotoModule,
            panel_module_1.PanelModule,
            action_module_1.ActionModule,
            app_routes_1.routing,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [app_component_1.AppComponent, list_component_1.ListComponent, register_component_1.RegisterComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map