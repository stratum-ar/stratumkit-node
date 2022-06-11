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
exports.ComboBox = void 0;
var component_1 = require("../../component");
var enums_1 = require("../../enums/enums");
var view_1 = require("../../view");
var button_1 = require("./button");
var ComboBoxSelectorView = /** @class */ (function (_super) {
    __extends(ComboBoxSelectorView, _super);
    function ComboBoxSelectorView(ui, options, selected, selectionHandler) {
        var _this = _super.call(this, ui) || this;
        _this.options = options;
        _this.selected = selected;
        _this.selectionHandler = selectionHandler;
        _this.backButton = new button_1.Button("Back", 42, 16, 50, 20).click(function () { return _this.ui.back(); });
        _this.prepPages();
        return _this;
    }
    ComboBoxSelectorView.prototype.prepPages = function () {
        var _this = this;
        var optionsPerPage = 6;
        var pageCount = Math.ceil(this.options.length / optionsPerPage);
        for (var i = 0; i < pageCount; i++) {
            this.addPage();
            this.addTo(i, this.backButton);
        }
        var _loop_1 = function (i) {
            var pageIndex = Math.floor(i / optionsPerPage);
            var offset = i % optionsPerPage;
            this_1.addTo(pageIndex, new button_1.Button(this_1.options[i], 16, 42 + 26 * offset, 208, 24, (i === this_1.selected) ? enums_1.ButtonState.HIGHLIGHTED : enums_1.ButtonState.DEFAULT).click(function () {
                _this.selectionHandler(i);
            }));
        };
        var this_1 = this;
        for (var i = 0; i < this.options.length; i++) {
            _loop_1(i);
        }
        this.setPage(Math.floor(this.selected / optionsPerPage));
    };
    return ComboBoxSelectorView;
}(view_1.PaginatedView));
var ComboBox = /** @class */ (function (_super) {
    __extends(ComboBox, _super);
    function ComboBox(options, selected, x, y, width, height, state) {
        if (state === void 0) { state = enums_1.ButtonState.DEFAULT; }
        var _this = _super.call(this, x, y, width, height) || this;
        _this.options = options;
        _this.selected = selected;
        _this.state = state;
        return _this;
    }
    Object.defineProperty(ComboBox.prototype, "text", {
        get: function () {
            if (this.selected < 0 || this.selected >= this.options.length) {
                return "";
            }
            return this.options[this.selected];
        },
        enumerable: false,
        configurable: true
    });
    ComboBox.prototype.handleInput = function (input) {
        var _this = this;
        if (!this.ownerUI) {
            return;
        }
        var selectorView = new ComboBoxSelectorView(this.ownerUI, this.options, this.selected, function (index) {
            var _a;
            _this.selected = index;
            (_a = _this.ownerUI) === null || _a === void 0 ? void 0 : _a.back();
            _super.prototype.handleInput.call(_this, input);
        });
        this.ownerUI.navigate(selectorView);
        this.ownerUI.render();
    };
    ComboBox.prototype.render = function (gfx) {
        gfx.drawComboBox(this.x, this.y, this.width, this.height, this.state, this.text);
    };
    return ComboBox;
}(component_1.UIComponent));
exports.ComboBox = ComboBox;
