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
exports.Label = void 0;
var color_1 = require("../color");
var component_1 = require("../component");
var enums_1 = require("../enums/enums");
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(text, x, y, width, height, alignment, color) {
        if (alignment === void 0) { alignment = enums_1.Alignment.TOPLEFT; }
        if (color === void 0) { color = color_1.Color.WHITE; }
        var _this = _super.call(this, x, y, width, height) || this;
        _this.text = text;
        _this.alignment = alignment;
        _this.color = color;
        return _this;
    }
    Label.prototype.render = function (gfx) {
        var hex = (0, color_1.convertColorTo8BitTriple)(this.color);
        gfx.drawAlignedText(this.x, this.y, this.width, this.height, this.alignment, this.text, hex[0], hex[1], hex[2]);
    };
    return Label;
}(component_1.UIComponent));
exports.Label = Label;
