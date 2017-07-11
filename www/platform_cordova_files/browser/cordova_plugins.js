cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.improvisio.bluetoothserial/www/bluetoothSerial.js",
        "id": "com.improvisio.bluetoothserial.bluetoothSerial",
        "pluginId": "com.improvisio.bluetoothserial",
        "clobbers": [
            "window.bluetoothSerial"
        ]
    },
    {
        "file": "plugins/com.improvisio.bluetoothserial/src/browser/bluetoothSerial.js",
        "id": "com.improvisio.bluetoothserial.BluetoothSerial_browser",
        "pluginId": "com.improvisio.bluetoothserial",
        "clobbers": [
            "window.bluetoothSerial"
        ]
    },
    {
        "file": "plugins/cordova-plugin-yanap/www/Yanap.js",
        "id": "cordova-plugin-yanap.Yanap",
        "pluginId": "cordova-plugin-yanap",
        "clobbers": [
            "cordova.plugins.Yanap"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    },
    {
        "file": "plugins/cordova-plugin-background-mode/src/browser/BackgroundModeProxy.js",
        "id": "cordova-plugin-background-mode.BackgroundMode.Proxy",
        "pluginId": "cordova-plugin-background-mode",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "com.improvisio.bluetoothserial": "3.0.2",
    "cordova-plugin-yanap": "0.8.9",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-background-mode": "0.7.2"
}
// BOTTOM OF METADATA
});