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
exports.Canvas = void 0;
var component_1 = require("../../component");
var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas(renderFunction) {
        var _this = _super.call(this, 0, 0, 0, 0) || this;
        _this.renderFunction = renderFunction;
        return _this;
    }
    Canvas.prototype.render = function (gfx) {
        this.renderFunction(gfx);
    };
    return Canvas;
}(component_1.UIComponent));
exports.Canvas = Canvas;
