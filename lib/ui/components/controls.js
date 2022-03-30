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
exports.Pager = exports.EditBox = exports.Progress = exports.Slider = exports.ComboBox = exports.Checkbox = exports.Button = void 0;
var component_1 = require("../component");
var enums_1 = require("../enums/enums");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(text, x, y, width, height, state) {
        if (state === void 0) { state = enums_1.ButtonState.DEFAULT; }
        var _this = _super.call(this, x, y, width, height) || this;
        _this.text = text;
        _this.state = state;
        return _this;
    }
    Button.prototype.render = function (gfx) {
        gfx.drawButton(this.x, this.y, this.width, this.height, this.state, this.text, null);
    };
    return Button;
}(component_1.UIComponent));
exports.Button = Button;
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    Checkbox.prototype.render = function (gfx) {
        gfx.drawCheckBox(this.x, this.y, this.width, this.height, true);
    };
    return Checkbox;
}(component_1.UIComponent));
exports.Checkbox = Checkbox;
var ComboBox = /** @class */ (function (_super) {
    __extends(ComboBox, _super);
    function ComboBox(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    ComboBox.prototype.render = function (gfx) {
        gfx.drawComboBox(this.x, this.y, this.width, this.height, enums_1.ButtonState.PRESSED, "ComboBox Pressed");
    };
    return ComboBox;
}(component_1.UIComponent));
exports.ComboBox = ComboBox;
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    Slider.prototype.render = function (gfx) {
        gfx.drawSlider(this.x, this.y, this.width, this.height, 100, true);
    };
    return Slider;
}(component_1.UIComponent));
exports.Slider = Slider;
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    Progress.prototype.render = function (gfx) {
        gfx.drawProgress(this.x, this.y, this.width, this.height, 100);
    };
    return Progress;
}(component_1.UIComponent));
exports.Progress = Progress;
var EditBox = /** @class */ (function (_super) {
    __extends(EditBox, _super);
    function EditBox(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    EditBox.prototype.render = function (gfx) {
        gfx.drawEditBox(this.x, this.y, this.width, this.height, enums_1.EditBoxState.OK, "Input Test", true);
    };
    return EditBox;
}(component_1.UIComponent));
exports.EditBox = EditBox;
var Pager = /** @class */ (function (_super) {
    __extends(Pager, _super);
    function Pager(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    Pager.prototype.render = function (gfx) {
        gfx.drawPager(this.x, this.y, this.width, this.height, 5, 5, true);
    };
    return Pager;
}(component_1.UIComponent));
exports.Pager = Pager;
