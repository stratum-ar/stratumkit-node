"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIComponent = void 0;
var UIComponent = /** @class */ (function () {
    function UIComponent(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onInput = function (input) { };
    }
    UIComponent.prototype.click = function (handler) {
        this.onInput = handler;
        return this;
    };
    UIComponent.prototype.hitTest = function (input) {
        return (input.x >= this.x) && (input.y >= this.y) &&
            (input.x < this.x + this.width) &&
            (input.y < this.y + this.height);
    };
    UIComponent.prototype.handleInput = function (input) {
        this.onInput(input);
    };
    return UIComponent;
}());
exports.UIComponent = UIComponent;
