"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphics = void 0;
var request_1 = require("./request");
var Graphics = /** @class */ (function () {
    function Graphics() {
        this.rgen = new request_1.RequestGenerator();
    }
    Graphics.prototype.drawLine = function (sx, sy, ex, ey, r, g, b) {
        this.rgen.append([16, sx, sy, ex, ey, r, g, b]);
    };
    Graphics.prototype.drawEllipse = function (x, y, width, height, r, g, b) {
        this.rgen.append([17, x, y, width, height, r, g, b]);
    };
    Graphics.prototype.fillRect = function (x, y, width, height, r, g, b) {
        this.rgen.append([18, x, y, width, height, r, g, b]);
    };
    Graphics.prototype.drawQuadratic = function (sx, sy, cx, cy, ex, ey, r, g, b) {
        this.rgen.append([20, sx, sy, cx, cy, ex, ey, r, g, b]);
    };
    Graphics.prototype.drawIcon = function (x, y, iconNo, r, g, b) {
        this.rgen.append([22, x, y, iconNo, r, g, b]);
    };
    Graphics.prototype.drawPolygon = function (xs, ys, r, g, b) {
        var arr = new Array(2 * xs.length + 5);
        arr[0] = 23;
        arr[1] = xs.length;
        for (var i = 2; i < 2 * xs.length + 2; i++)
            arr[i] = i % 2 == 0 ? xs[(i - 2) / 2] : ys[(i - 2) / 2];
        arr[arr.length - 3] = r;
        arr[arr.length - 2] = g;
        arr[arr.length - 1] = b;
        this.rgen.append(arr);
    };
    Graphics.prototype.drawText = function (x, y, text, r, g, b) {
        var arr = __spreadArray([30, x, y], this.textToBytes(text), true);
        arr.push(r, g, b);
        this.rgen.append(arr);
    };
    Graphics.prototype.drawAlignedText = function (x, y, width, height, alignment, text, r, g, b) {
        var arr = __spreadArray([32, x, y, width, height, alignment], this.textToBytes(text), true);
        arr.push(r, g, b);
        this.rgen.append(arr);
    };
    Graphics.prototype.drawButton = function (x, y, width, height, buttonState, text, iconNo) {
        var data = __spreadArray([33, x, y, width, height, buttonState], this.textToBytes(text), true);
        if (iconNo === null) {
            data.push(0);
        }
        else {
            data.push(1, iconNo);
        }
        this.rgen.append(data);
    };
    Graphics.prototype.drawComboBox = function (x, y, width, height, buttonState, text) {
        this.rgen.append(__spreadArray([
            34, x, y, width, height,
            buttonState
        ], this.textToBytes(text), true));
    };
    Graphics.prototype.drawCheckBox = function (x, y, isChecked) {
        this.rgen.append([35, x, y, isChecked ? 1 : 0]);
    };
    Graphics.prototype.drawSlider = function (x, y, width, height, fillPercentage, vertical) {
        this.rgen.append([37, x, y, width, height, fillPercentage * 255, vertical ? 1 : 0]);
    };
    Graphics.prototype.drawProgress = function (x, y, width, height, progress) {
        this.rgen.append([38, x, y, width, height, progress * 255]);
    };
    Graphics.prototype.drawEditBox = function (x, y, width, height, editBoxState, text, isSelected, selStart, selEnd) {
        var arr = __spreadArray([39, x, y, width, height, editBoxState], this.textToBytes(text), true);
        if (isSelected == true && selStart != null && selEnd != null)
            arr.push(1, selStart, selEnd);
        else
            arr.push(0);
        this.rgen.append(arr);
    };
    Graphics.prototype.drawPager = function (x, y, width, height, noOfItems, selectedIndex, vertical) {
        this.rgen.append([43, x, y, width, height, noOfItems, selectedIndex, vertical ? 1 : 0]);
    };
    Graphics.prototype.toBuffer = function () {
        return this.rgen.toBuffer();
    };
    Graphics.prototype.textToBytes = function (text) {
        return __spreadArray([
            text.length
        ], (text.split("").map(function (c) { return c.charCodeAt(0) & 0xFF; })), true);
    };
    return Graphics;
}());
exports.Graphics = Graphics;
