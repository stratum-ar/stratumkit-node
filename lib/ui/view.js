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
exports.PaginatedView = exports.UIView = void 0;
var pager_1 = require("./components/controls/pager");
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
        var _this = this;
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        components.forEach(function (component) { return component.ownerUI = _this.ui; });
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
var PaginatedView = /** @class */ (function (_super) {
    __extends(PaginatedView, _super);
    function PaginatedView(ui) {
        var _this = _super.call(this, ui) || this;
        _this.pages = [];
        _this.currentPage = 0;
        _this.pager = new pager_1.Pager(0, 0, 0, 210, 240, 16);
        _this.setupPager();
        return _this;
    }
    Object.defineProperty(PaginatedView.prototype, "pageCount", {
        get: function () {
            return this.pages.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginatedView.prototype, "currentComponents", {
        get: function () {
            if (this.currentPage < 0 ||
                this.currentPage >= this.pageCount) {
                return [];
            }
            else {
                return this.pages[this.currentPage];
            }
        },
        enumerable: false,
        configurable: true
    });
    PaginatedView.prototype.setupPager = function () {
        var _this = this;
        this.pager.click(function () {
            _this.currentPage = _this.pager.index;
        });
        _super.prototype.add.call(this, this.pager);
    };
    PaginatedView.prototype.updatePager = function () {
        this.pager.noOfItems = this.pages.length;
        this.pager.index = Math.max(0, this.currentPage);
    };
    PaginatedView.prototype.addPage = function () {
        this.pages.push([]);
        this.updatePager();
    };
    PaginatedView.prototype.insertPage = function (index) {
        this.pages.splice(index, 0, []);
        this.updatePager();
    };
    PaginatedView.prototype.setPage = function (index) {
        if (index < 0 || index >= this.pageCount) {
            return;
        }
        this.currentPage = index;
        this.updatePager();
        this.ui.render();
    };
    PaginatedView.prototype.addTo = function (index) {
        var _this = this;
        var components = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            components[_i - 1] = arguments[_i];
        }
        if (index < 0 || index >= this.pageCount) {
            return;
        }
        var target = this.pages[index];
        components.forEach(function (component) { return component.ownerUI = _this.ui; });
        target.push.apply(target, components);
    };
    PaginatedView.prototype.removeFrom = function (index, component) {
        if (index < 0 || index >= this.pageCount) {
            return;
        }
        var target = this.pages[index];
        var componentIndex = target.indexOf(component);
        if (componentIndex >= 0) {
            target.splice(componentIndex, 1);
        }
    };
    PaginatedView.prototype.add = function () {
        var _a;
        var _this = this;
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        components.forEach(function (component) { return component.ownerUI = _this.ui; });
        (_a = this.currentComponents).push.apply(_a, components);
    };
    PaginatedView.prototype.remove = function (component) {
        var index = this.currentComponents.indexOf(component);
        if (index >= 0) {
            this.currentComponents.splice(index, 1);
        }
    };
    PaginatedView.prototype.handleInput = function (input) {
        _super.prototype.handleInput.call(this, input);
        for (var _i = 0, _a = this.currentComponents; _i < _a.length; _i++) {
            var component = _a[_i];
            if (component.hitTest(input)) {
                component.handleInput(input);
                return;
            }
        }
    };
    PaginatedView.prototype.render = function (gfx) {
        _super.prototype.render.call(this, gfx);
        for (var _i = 0, _a = this.currentComponents; _i < _a.length; _i++) {
            var component = _a[_i];
            component.render(gfx);
        }
    };
    return PaginatedView;
}(UIView));
exports.PaginatedView = PaginatedView;
