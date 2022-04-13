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
exports.Checkbox = void 0;
var component_1 = require("../../component");
var enums_1 = require("../../enums/enums");
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(checked, text, x, y, width, height) {
        var _this = _super.call(this, x, y, width, height) || this;
        _this.checked = checked;
        _this.text = text;
        return _this;
    }
    Checkbox.prototype.render = function (gfx) {
        gfx.drawCheckBox(this.x, this.y + Math.floor((this.height - 16) / 2), this.checked);
        if (this.text.length && this.width > 20) {
            gfx.drawAlignedText(this.x + 20, this.y, this.width - 20, this.height, enums_1.Alignment.LEFT, this.text, 255, 255, 255);
        }
    };
    Checkbox.prototype.handleInput = function (input) {
        this.checked = !this.checked;
        _super.prototype.handleInput.call(this, input);
    };
    return Checkbox;
}(component_1.UIComponent));
exports.Checkbox = Checkbox;
