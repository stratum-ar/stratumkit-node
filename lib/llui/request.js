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
exports.RequestGenerator = void 0;
var smart_buffer_1 = require("smart-buffer");
var RequestGenerator = /** @class */ (function () {
    function RequestGenerator() {
        this.bytes = [0];
    }
    RequestGenerator.prototype.end = function () {
        if (this.bytes.length === 1) {
            this.bytes.push(2);
        }
        else {
            this.bytes[this.bytes.length - 1] = 2;
        }
    };
    RequestGenerator.prototype.append = function (data) {
        var _a;
        this.bytes[0] += 1;
        (_a = this.bytes).push.apply(_a, __spreadArray(__spreadArray([], data, false), [1], false));
    };
    RequestGenerator.prototype.toBuffer = function () {
        this.end();
        var buffer = new smart_buffer_1.SmartBuffer();
        this.bytes.forEach(function (byte) { return buffer.writeUInt8(byte); });
        return buffer.toBuffer();
    };
    return RequestGenerator;
}());
exports.RequestGenerator = RequestGenerator;
