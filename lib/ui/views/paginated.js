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
exports.PaginatedView = void 0;
var __1 = require("..");
var pager_1 = require("../components/controls/pager");
var PaginatedView = /** @class */ (function (_super) {
    __extends(PaginatedView, _super);
    function PaginatedView(ui) {
        var _this = _super.call(this, ui) || this;
        _this.pages = [];
        _this.currentPage = -1;
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
        this.add(this.pager);
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
}(__1.UIView));
exports.PaginatedView = PaginatedView;
