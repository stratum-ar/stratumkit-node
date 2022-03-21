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
exports.UI = exports.UIView = void 0;
var llui_1 = require("../llui");
var UIView = /** @class */ (function () {
    function UIView(ui) {
        this.ui = ui;
        this.components = [];
    }
    UIView.prototype.handleInput = function (input) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.hitTest(input)) {
                component.handleInput(input);
                return;
            }
        }
    };
    UIView.prototype.add = function () {
        var _a;
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        (_a = this.components).push.apply(_a, components);
    };
    UIView.prototype.remove = function (component) {
        var index = this.components.indexOf(component);
        if (index >= 0) {
            this.components.splice(index, 1);
        }
    };
    UIView.prototype.render = function (gfx) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            component.render(gfx);
        }
    };
    return UIView;
}());
exports.UIView = UIView;
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
        var view = new UIView(this);
        creator(view);
        return view;
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