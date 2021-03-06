var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```js
 * let info = Device.getDevice();
 * // Device sits below
 * ```
 */
var Device = (function () {
    function Device() {
    }
    /**
     * Returns the whole device object.
     * @see https://github.com/apache/cordova-plugin-device
     * @returns {Object} The device object.
     */
    Device.getDevice = function () {
        return window.device;
    };
    __decorate([
        plugin_1.RequiresPlugin
    ], Device, "getDevice", null);
    Device = __decorate([
        plugin_1.Plugin({
            name: 'Device',
            plugin: 'cordova-plugin-device',
            pluginRef: 'device'
        })
    ], Device);
    return Device;
})();
exports.Device = Device;
//# sourceMappingURL=device.js.map