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
exports.UI = void 0;
var llui_1 = require("../llui");
var view_1 = require("./view");
var UI = /** @class */ (function () {
    function UI(app) {
        this.app = app;
        this.views = [];
        this.viewIndex = -1;
    }
    Object.defineProperty(UI.prototype, "currentView", {
        get: function () {
            if (this.views.length === 0) {
                return null;
            }
            return this.views[this.viewIndex];
        },
        enumerable: false,
        configurable: true
    });
    UI.prototype.createView = function (creator) {
        var view = new view_1.UIView(this);
        creator(view);
        return view;
    };
    UI.prototype.createPaginatedView = function (creator) {
        var view = new view_1.PaginatedView(this);
        creator(view);
        return view;
    };
    UI.prototype.back = function () {
        if (this.viewIndex > 0) {
            this.viewIndex -= 1;
            this.render();
        }
    };
    UI.prototype.navigate = function (view) {
        var nextIndex = this.viewIndex + 1;
        if (nextIndex >= this.views.length) {
            this.views.push(view);
        }
        else {
            this.views = __spreadArray(__spreadArray([], this.views.slice(0, nextIndex), true), [
                view
            ], false);
        }
        this.viewIndex = nextIndex;
    };
    UI.prototype.handleInput = function (input) {
        var _a;
        (_a = this.currentView) === null || _a === void 0 ? void 0 : _a.handleInput(input);
    };
    UI.prototype.render = function () {
        var _a;
        var gfx = new llui_1.Graphics();
        (_a = this.currentView) === null || _a === void 0 ? void 0 : _a.render(gfx);
        this.app.sendCommand(0x10, gfx.toBuffer());
    };
    return UI;
}());
exports.UI = UI;
