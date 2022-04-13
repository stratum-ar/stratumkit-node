"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var component_1 = require("../../component");
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress(value, x, y, width, height) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.value = value;
        return _this;
    }
    Progress.prototype.render = function (gfx) {
        gfx.drawProgress(this.x, this.y, this.width, this.height, this.value);
    };
    return Progress;
}(component_1.UIComponent));
exports.Progress = Progress;
