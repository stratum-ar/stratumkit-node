"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var ui_1 = require("./ui");
var controls_1 = require("./ui/components/controls");
var shapes_1 = require("./ui/components/shapes");
var app = new app_1.App();
var ui = new ui_1.UI(app);
app.onInput = function (input) {
    ui.handleInput(input);
};
(_a = app.start(process.argv[2])) === null || _a === void 0 ? void 0 : _a.then(function () {
    console.log("Wee!");
    var mainView = ui.createView(function (v) {
        v.add(new shapes_1.Rectangle(16, 32, 60, 20).click(function () {
            console.log("Rectangle click!");
        }));
        v.add(new controls_1.Button("abc", 80, 32, 60, 20).click(function () {
            console.log("Button click!");
        }));
        // v.add(new Checkbox(16, 16, 10, 10).click(() => {
        //     console.log("Checkbox click!")
        // }))
        // v.add(new ComboBox(16, 102, 100, 20).click(() => {
        //     console.log("ComboBox click!")
        // }))
        // v.add(new Slider(136, 54, 16, 48).click(() => {
        //     console.log("Slider click!")
        // }))
        // v.add(new Progress(16, 196, 208, 8).click(() => {
        //     console.log("Progress click!")
        // }))
        // v.add(new EditBox(16, 148, 60, 20).click(() => {
        //     console.log("EditBox click!")
        // }))
        // v.add(new Pager(16, 208, 208, 16).click(() => {
        //     console.log("Pager click!")
        // }))
    });
    ui.navigate(mainView);
    ui.render();
});
