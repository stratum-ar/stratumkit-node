"use strict";
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
        this.rgen.append([18, sx, sy, cx, cy, ex, ey, r, g, b]);
    };
    Graphics.prototype.toBuffer = function () {
        return this.rgen.toBuffer();
    };
    return Graphics;
}());
exports.Graphics = Graphics;
