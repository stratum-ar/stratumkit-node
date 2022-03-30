"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditBoxState = exports.ButtonState = exports.Alignment = void 0;
var Alignment;
(function (Alignment) {
    Alignment[Alignment["TOPLEFT"] = 0] = "TOPLEFT";
    Alignment[Alignment["TOP"] = 1] = "TOP";
    Alignment[Alignment["TOPRIGHT"] = 2] = "TOPRIGHT";
    Alignment[Alignment["LEFT"] = 3] = "LEFT";
    Alignment[Alignment["MIDDLE"] = 4] = "MIDDLE";
    Alignment[Alignment["RIGHT"] = 5] = "RIGHT";
    Alignment[Alignment["BOTTOMLEFT"] = 6] = "BOTTOMLEFT";
    Alignment[Alignment["BOTTOM"] = 7] = "BOTTOM";
    Alignment[Alignment["BOTTOMRIGHT"] = 8] = "BOTTOMRIGHT";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["DEFAULT"] = 0] = "DEFAULT";
    ButtonState[ButtonState["DISABLED"] = 1] = "DISABLED";
    ButtonState[ButtonState["HIGHLIGHTED"] = 2] = "HIGHLIGHTED";
    ButtonState[ButtonState["PRESSED"] = 3] = "PRESSED";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
var EditBoxState;
(function (EditBoxState) {
    EditBoxState[EditBoxState["DEFAULT"] = 0] = "DEFAULT";
    EditBoxState[EditBoxState["ERROR"] = 1] = "ERROR";
    EditBoxState[EditBoxState["OK"] = 2] = "OK";
})(EditBoxState = exports.EditBoxState || (exports.EditBoxState = {}));
