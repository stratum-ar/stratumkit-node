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
exports.EditBox = void 0;
var component_1 = require("../component");
var enums_1 = require("../enums/enums");
var EditBox = /** @class */ (function (_super) {
    __extends(EditBox, _super);
    function EditBox(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    EditBox.prototype.render = function (gfx) {
        gfx.drawEditBox(this.x, this.y, this.width, this.height, enums_1.EditBoxState.OK, "Input Test", true);
    };
    return EditBox;
}(component_1.UIComponent));
exports.EditBox = EditBox;
