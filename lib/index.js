"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var ui_1 = require("./ui");
var shapes_1 = require("./ui/components/shapes");
var app = new app_1.App();
var ui = new ui_1.UI(app);
app.onInput = function (input) {
    ui.handleInput(input);
};
(_a = app.start(process.argv[2])) === null || _a === void 0 ? void 0 : _a.then(function () {
    console.log("Wee!");
    var mainView = ui.createView(function (v) {
        v.add(new shapes_1.Rectangle(50, 50, 100, 30).click(function () {
            console.log("click!");
        }));
    });
    ui.navigate(mainView);
    ui.render();
});
