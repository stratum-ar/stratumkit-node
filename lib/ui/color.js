"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertColorTo8BitTriple = exports.Color = void 0;
var Color = /** @class */ (function () {
    function Color(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    Color.PINK = new Color(255, 192, 203);
    Color.LIGHTPINK = new Color(255, 182, 193);
    Color.HOTPINK = new Color(255, 105, 180);
    Color.DEEPPINK = new Color(255, 20, 147);
    Color.PALEVIOLETRED = new Color(219, 112, 147);
    Color.MEDIUMVIOLETRED = new Color(199, 21, 133);
    Color.LIGHTSALMON = new Color(255, 160, 122);
    Color.SALMON = new Color(250, 128, 114);
    Color.DARKSALMON = new Color(233, 150, 122);
    Color.LIGHTCORAL = new Color(240, 128, 128);
    Color.INDIANRED = new Color(205, 92, 92);
    Color.CRIMSON = new Color(220, 20, 60);
    Color.FIREBRICK = new Color(178, 34, 34);
    Color.DARKRED = new Color(139, 0, 0);
    Color.RED = new Color(255, 0, 0);
    Color.ORANGERED = new Color(255, 69, 0);
    Color.TOMATO = new Color(255, 99, 71);
    Color.CORAL = new Color(255, 127, 80);
    Color.DARKORANGE = new Color(255, 140, 0);
    Color.ORANGE = new Color(255, 165, 0);
    Color.GOLD = new Color(255, 215, 0);
    Color.YELLOW = new Color(255, 255, 0);
    Color.LIGHTYELLOW = new Color(255, 255, 224);
    Color.LEMONCHIFFON = new Color(255, 250, 205);
    Color.LIGHTGOLDENRODYELLOW = new Color(250, 250, 210);
    Color.PAPAYAWHIP = new Color(255, 239, 213);
    Color.MOCCASIN = new Color(255, 228, 181);
    Color.PEACHPUFF = new Color(255, 218, 185);
    Color.PALEGOLDENROD = new Color(238, 232, 170);
    Color.KHAKI = new Color(240, 230, 140);
    Color.DARKKHAKI = new Color(189, 183, 107);
    Color.CORNSILK = new Color(255, 248, 220);
    Color.BLANCHEDALMOND = new Color(255, 235, 205);
    Color.BISQUE = new Color(255, 228, 196);
    Color.NAVAJOWHITE = new Color(255, 222, 173);
    Color.WHEAT = new Color(245, 222, 179);
    Color.BURLYWOOD = new Color(222, 184, 135);
    Color.TAN = new Color(210, 180, 140);
    Color.ROSYBROWN = new Color(188, 143, 143);
    Color.SANDYBROWN = new Color(244, 164, 96);
    Color.GOLDENROD = new Color(218, 165, 32);
    Color.DARKGOLDENROD = new Color(184, 134, 11);
    Color.PERU = new Color(205, 133, 63);
    Color.CHOCOLATE = new Color(210, 105, 30);
    Color.SADDLEBROWN = new Color(139, 69, 19);
    Color.SIENNA = new Color(160, 82, 45);
    Color.BROWN = new Color(165, 42, 42);
    Color.MAROON = new Color(128, 0, 0);
    Color.DARKOLIVEGREEN = new Color(85, 107, 47);
    Color.OLIVE = new Color(128, 128, 0);
    Color.OLIVEDRAB = new Color(107, 142, 35);
    Color.YELLOWGREEN = new Color(154, 205, 50);
    Color.LIMEGREEN = new Color(50, 205, 50);
    Color.LIME = new Color(0, 255, 0);
    Color.LAWNGREEN = new Color(124, 252, 0);
    Color.CHARTREUSE = new Color(127, 255, 0);
    Color.GREENYELLOW = new Color(173, 255, 47);
    Color.SPRINGGREEN = new Color(0, 255, 127);
    Color.MEDIUMSPRINGGREEN = new Color(0, 250, 154);
    Color.LIGHTGREEN = new Color(144, 238, 144);
    Color.PALEGREEN = new Color(152, 251, 152);
    Color.DARKSEAGREEN = new Color(143, 188, 143);
    Color.MEDIUMSEAGREEN = new Color(60, 179, 113);
    Color.SEAGREEN = new Color(46, 139, 87);
    Color.FORESTGREEN = new Color(34, 139, 34);
    Color.GREEN = new Color(0, 128, 0);
    Color.DARKGREEN = new Color(0, 100, 0);
    Color.MEDIUMAQUAMARINE = new Color(102, 205, 170);
    Color.AQUA = new Color(0, 255, 255);
    Color.CYAN = new Color(0, 255, 255);
    Color.LIGHTCYAN = new Color(224, 255, 255);
    Color.PALETURQUOISE = new Color(175, 238, 238);
    Color.AQUAMARINE = new Color(127, 255, 212);
    Color.TURQUOISE = new Color(64, 224, 208);
    Color.MEDIUMTURQUOISE = new Color(72, 209, 204);
    Color.DARKTURQUOISE = new Color(0, 206, 209);
    Color.LIGHTSEAGREEN = new Color(32, 178, 170);
    Color.CADETBLUE = new Color(95, 158, 160);
    Color.DARKCYAN = new Color(0, 139, 139);
    Color.TEAL = new Color(0, 128, 128);
    Color.LIGHTSTEELBLUE = new Color(176, 196, 222);
    Color.POWDERBLUE = new Color(176, 224, 230);
    Color.LIGHTBLUE = new Color(173, 216, 230);
    Color.SKYBLUE = new Color(135, 206, 235);
    Color.LIGHTSKYBLUE = new Color(135, 206, 250);
    Color.DEEPSKYBLUE = new Color(0, 191, 255);
    Color.DODGERBLUE = new Color(30, 144, 255);
    Color.CORNFLOWERBLUE = new Color(100, 149, 237);
    Color.STEELBLUE = new Color(70, 130, 180);
    Color.ROYALBLUE = new Color(65, 105, 225);
    Color.BLUE = new Color(0, 0, 255);
    Color.MEDIUMBLUE = new Color(0, 0, 205);
    Color.DARKBLUE = new Color(0, 0, 139);
    Color.NAVY = new Color(0, 0, 128);
    Color.MIDNIGHTBLUE = new Color(25, 25, 112);
    Color.LAVENDER = new Color(230, 230, 250);
    Color.THISTLE = new Color(216, 191, 216);
    Color.PLUM = new Color(221, 160, 221);
    Color.VIOLET = new Color(238, 130, 238);
    Color.ORCHID = new Color(218, 112, 214);
    Color.FUCHSIA = new Color(255, 0, 255);
    Color.MAGENTA = new Color(255, 0, 255);
    Color.MEDIUMORCHID = new Color(186, 85, 211);
    Color.MEDIUMPURPLE = new Color(147, 112, 219);
    Color.BLUEVIOLET = new Color(138, 43, 226);
    Color.DARKVIOLET = new Color(148, 0, 211);
    Color.DARKORCHID = new Color(153, 50, 204);
    Color.DARKMAGENTA = new Color(139, 0, 139);
    Color.PURPLE = new Color(128, 0, 128);
    Color.INDIGO = new Color(75, 0, 130);
    Color.DARKSLATEBLUE = new Color(72, 61, 139);
    Color.SLATEBLUE = new Color(106, 90, 205);
    Color.MEDIUMSLATEBLUE = new Color(123, 104, 238);
    Color.WHITE = new Color(255, 255, 255);
    Color.SNOW = new Color(255, 250, 250);
    Color.HONEYDEW = new Color(240, 255, 240);
    Color.MINTCREAM = new Color(245, 255, 250);
    Color.AZURE = new Color(240, 255, 255);
    Color.ALICEBLUE = new Color(240, 248, 255);
    Color.GHOSTWHITE = new Color(248, 248, 255);
    Color.WHITESMOKE = new Color(245, 245, 245);
    Color.SEASHELL = new Color(255, 245, 238);
    Color.BEIGE = new Color(245, 245, 220);
    Color.OLDLACE = new Color(253, 245, 230);
    Color.FLORALWHITE = new Color(255, 250, 240);
    Color.IVORY = new Color(255, 255, 240);
    Color.ANTIQUEWHITE = new Color(250, 235, 215);
    Color.LINEN = new Color(250, 240, 230);
    Color.LAVENDERBLUSH = new Color(255, 240, 245);
    Color.MISTYROSE = new Color(255, 228, 225);
    Color.GAINSBORO = new Color(220, 220, 220);
    Color.LIGHTGRAY = new Color(211, 211, 211);
    Color.SILVER = new Color(192, 192, 192);
    Color.DARKGREY = new Color(169, 169, 169);
    Color.GREY = new Color(128, 128, 128);
    Color.DIMGREY = new Color(105, 105, 105);
    Color.LIGHTSLATEGREY = new Color(119, 136, 153);
    Color.SLATEGREY = new Color(112, 128, 144);
    Color.DARKSLATEGREY = new Color(47, 79, 79);
    Color.BLACK = new Color(0, 0, 0);
    return Color;
}());
exports.Color = Color;
function convertColorTo8BitTriple(color) {
    return [
        Math.max(Math.min(Math.floor(color.red), 255), 0),
        Math.max(Math.min(Math.floor(color.green), 255), 0),
        Math.max(Math.min(Math.floor(color.blue), 255), 0)
    ];
}
exports.convertColorTo8BitTriple = convertColorTo8BitTriple;
