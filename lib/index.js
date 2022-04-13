"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var llui_1 = require("./llui");
var ui_1 = require("./ui");
var slider_1 = require("./ui/components/controls/slider");
var button_1 = require("./ui/components/controls/button");
var checkbox_1 = require("./ui/components/controls/checkbox");
var progress_1 = require("./ui/components/controls/progress");
var text_1 = require("./ui/components/text");
var enums_1 = require("./ui/enums/enums");
var pager_1 = require("./ui/components/controls/pager");
var combobox_1 = require("./ui/components/controls/combobox");
var app = new app_1.App();
var ui = new ui_1.UI(app);
app.onInput = function (input) {
    ui.handleInput(input);
};
(_a = app.start(process.argv[2])) === null || _a === void 0 ? void 0 : _a.then(function () {
    var subView = ui.createPaginatedView(function (v) {
        v.addPage();
        v.addPage();
        v.addTo(0, new button_1.Button("Hi!", 16, 16, 60, 24).click(function () { return v.ui.back(); }));
        v.addTo(1, new slider_1.Slider(0.4, 16, 16, 100, 16), new text_1.Label("Page 2!!!", 16, 40, 100, 16));
    });
    var mainView = ui.createView(function (v) {
        var count = 0;
        var label = new text_1.Label(count.toString(), 64, 64, 40, 20, enums_1.Alignment.MIDDLE);
        var decrement = new button_1.Button("-", 34, 64, 40, 20).click(function () {
            count--;
            label.text = count.toString();
        });
        var increment = new button_1.Button("+", 104, 64, 40, 20).click(function () {
            count++;
            label.text = count.toString();
        });
        v.add(new button_1.Button("Sub", 16, 16, 50, 24).click(function () { return v.ui.navigate(subView); }));
        v.add(new combobox_1.ComboBox(Array(26).fill(0).map(function (_, i) { return "Option ".concat(i); }), 0, 70, 16, 100, 24));
        v.add(new checkbox_1.Checkbox(false, "Hello", 16, 100, 100, 16));
        v.add(new progress_1.Progress(0.3, 16, 130, 120, 16));
        v.add(new progress_1.Progress(0.7, 16, 150, 120, 16));
        v.add(new slider_1.Slider(0.5, 16, 170, 120, 16));
        v.add(new slider_1.Slider(0.5, 180, 16, 16, 120, true));
        v.add(new pager_1.Pager(6, 2, 0, 210, 240, 16));
        v.add(new pager_1.Pager(6, 2, 210, 0, 16, 240, true));
        v.add(label, decrement, increment);
    });
    ui.navigate(mainView);
    var gfx = new llui_1.Graphics();
    gfx.drawCheckBox(16, 16, false);
    gfx.drawCheckBox(48, 16, true);
    app.sendCommand(0x10, gfx.toBuffer());
    ui.render();
});
