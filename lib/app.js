"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var net_1 = require("net");
var smart_buffer_1 = require("smart-buffer");
var App = /** @class */ (function () {
    function App() {
        this._conn = false;
        this.client = new net_1.Socket();
        this.onInput = function (input) { };
    }
    App.prototype.handleData = function (resolve) {
        var _this = this;
        return function (data) {
            var command = data.readUint8(0);
            if (command === 0x01) { // App Server confirmation
                _this._conn = true;
                resolve();
            }
            else if (command === 0x0F) { // Input
                var x = data.readUint8(1);
                var y = data.readUint8(2);
                _this.onInput({ x: x, y: y });
            }
        };
    };
    Object.defineProperty(App.prototype, "connected", {
        get: function () {
            return this._conn;
        },
        enumerable: false,
        configurable: true
    });
    App.prototype.start = function (appId) {
        var _this = this;
        if (this._conn) {
            return null;
        }
        return new Promise(function (resolve, reject) {
            _this.client.connect(50665, "localhost", function () {
                // Reply to App Server with ID
                var buffer = new smart_buffer_1.SmartBuffer();
                buffer.writeUInt8(0);
                buffer.writeString(appId);
                _this.client.write(buffer.toBuffer());
            });
            _this.client.on("data", function (data) { return _this.handleData(resolve)(data); });
        });
    };
    App.prototype.sendCommand = function (id, data) {
        var _this = this;
        var buffer = new smart_buffer_1.SmartBuffer();
        buffer.writeUInt8(id);
        buffer.writeUInt16BE(data.length);
        buffer.writeBuffer(data);
        return new Promise(function (resolve, reject) {
            _this.client.write(buffer.toBuffer(), function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return App;
}());
exports.App = App;
