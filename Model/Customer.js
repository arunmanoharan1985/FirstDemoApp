"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(CustomerName, CustomerCode, CustomerAmount) {
        this._CustomerName = CustomerName;
        this._CustomerCode = CustomerCode;
        this._CustomerAmount = CustomerAmount;
    }
    Object.defineProperty(Customer.prototype, "CustomerName", {
        get: function () {
            return this._CustomerName;
        },
        set: function (value) {
            this._CustomerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "CustomerCode", {
        get: function () {
            return this._CustomerCode;
        },
        set: function (value) {
            this._CustomerCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "CustomerAmount", {
        get: function () {
            return this._CustomerAmount;
        },
        set: function (value) {
            this._CustomerAmount = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map