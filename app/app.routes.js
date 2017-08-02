"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var list_component_1 = require("./list/list.component");
var register_component_1 = require("./register/register.component");
var appRouters = [
    { path: '', component: list_component_1.ListComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'edit/:id', component: register_component_1.RegisterComponent },
    { path: '**', component: list_component_1.ListComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRouters);
//# sourceMappingURL=app.routes.js.map