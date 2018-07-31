System.register(["@angular/core", "../Model/Customer", "../Service/TestService"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Customer_1, TestService_1, CustomerComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (TestService_1_1) {
                TestService_1 = TestService_1_1;
            }
        ],
        execute: function () {
            // Customer component class exposing the customer model
            CustomerComponent = (function () {
                function CustomerComponent(_appService) {
                    this._appService = _appService;
                    this.value = "";
                    this.CurrentCustomer = new Customer_1.Customer("Yoha", "008", 1);
                }
                CustomerComponent.prototype.ngOnInit = function () {
                    this.value = this._appService.getApp();
                };
                return CustomerComponent;
            }());
            CustomerComponent = __decorate([
                core_1.Component({
                    selector: "customer-ui",
                    templateUrl: "../UI/Customer.html",
                    providers: [TestService_1.appService]
                })
                // Customer component class exposing the customer model
            ], CustomerComponent);
            exports_1("CustomerComponent", CustomerComponent);
        }
    };
});
