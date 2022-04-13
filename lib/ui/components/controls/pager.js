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
exports.Pager = void 0;
var component_1 = require("../../component");
var Pager = /** @class */ (function (_super) {
    __extends(Pager, _super);
    function Pager(noOfItems, index, x, y, width, height, vertical) {
        if (vertical === void 0) { vertical = false; }
        var _this = _super.call(this, x, y, width, height) || this;
        _this.noOfItems = noOfItems;
        _this.index = index;
        _this.vertical = vertical;
        return _this;
    }
    Pager.prototype.render = function (gfx) {
        gfx.drawPager(this.x, this.y, this.width, this.height, this.noOfItems, this.index, this.vertical);
    };
    Pager.prototype.handleInput = function (input) {
        if (this.vertical) {
            var height = 16 * this.noOfItems;
            var start = this.y + (this.height - height) / 2;
            var index = Math.floor((input.y - start) / 16);
            if (index >= 0 && index < this.noOfItems) {
                this.index = index;
            }
        }
        else {
            var width = 16 * this.noOfItems;
            var start = this.x + (this.width - width) / 2;
            var index = Math.floor((input.x - start) / 16);
            if (index >= 0 && index < this.noOfItems) {
                this.index = index;
            }
        }
        _super.prototype.handleInput.call(this, input);
    };
    return Pager;
}(component_1.UIComponent));
exports.Pager = Pager;
