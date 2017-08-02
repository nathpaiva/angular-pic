"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var photo_component_1 = require("../photo/photo.component");
var forms_1 = require("@angular/forms");
var photo_service_1 = require("../photo/photo.service");
var router_1 = require("@angular/router");
var RegisterComponent = (function () {
    function RegisterComponent(fb, service, route, router) {
        var _this = this;
        this.photo = new photo_component_1.PhotoComponent();
        this.message = '';
        this.id = '';
        this.service = service;
        this.router = router;
        route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (!!!_this.id)
                return;
            _this.service.editPhoto(_this.id)
                .subscribe(function (photo) { return _this.photo = photo; }, function (error) { return console.log(error); });
        });
        // registerPhoto
        this.registerPhoto = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: [''],
        });
    }
    RegisterComponent.prototype.saveNewPhoto = function (e) {
        var _this = this;
        e.preventDefault();
        this.service.register(this.photo)
            .subscribe(function (res) {
            _this.photo = new photo_component_1.PhotoComponent;
            _this.message = res.showMessage;
            if (!res.isInclusion)
                _this.router.navigate(['']);
        }, function (err) { return console.log(err); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: './register.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, photo_service_1.PhotoService, router_1.ActivatedRoute, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map