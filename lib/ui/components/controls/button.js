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
exports.Button = void 0;
var component_1 = require("../../component");
var enums_1 = require("../../enums/enums");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(text, x, y, width, height, state) {
        if (state === void 0) { state = enums_1.ButtonState.DEFAULT; }
        var _this = _super.call(this, x, y, width, height) || this;
        _this.text = text;
        _this.state = state;
        return _this;
    }
    Button.prototype.render = function (gfx) {
        gfx.drawButton(this.x, this.y, this.width, this.height, this.state, this.text, null);
    };
    return Button;
}(component_1.UIComponent));
exports.Button = Button;
