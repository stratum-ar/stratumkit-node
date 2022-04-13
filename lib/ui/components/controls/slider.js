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
exports.Slider = void 0;
var component_1 = require("../../component");
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(value, x, y, width, height, vertical) {
        if (vertical === void 0) { vertical = false; }
        var _this = _super.call(this, x, y, width, height) || this;
        _this.value = value;
        _this.vertical = vertical;
        return _this;
    }
    Slider.prototype.render = function (gfx) {
        gfx.drawSlider(this.x, this.y, this.width, this.height, this.value, this.vertical);
    };
    Slider.prototype.handleInput = function (input) {
        if (this.vertical) {
            this.value = 1 - (input.y - this.y) / this.height;
        }
        else {
            this.value = (input.x - this.x) / this.width;
        }
        _super.prototype.handleInput.call(this, input);
    };
    return Slider;
}(component_1.UIComponent));
exports.Slider = Slider;
