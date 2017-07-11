cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.improvisio.bluetoothserial.bluetoothSerial",
        "file": "plugins/com.improvisio.bluetoothserial/www/bluetoothSerial.js",
        "pluginId": "com.improvisio.bluetoothserial",
        "clobbers": [
            "window.bluetoothSerial"
        ]
    },
    {
        "id": "cordova-plugin-yanap.Yanap",
        "file": "plugins/cordova-plugin-yanap/www/Yanap.js",
        "pluginId": "cordova-plugin-yanap",
        "clobbers": [
            "cordova.plugins.Yanap"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-background-mode.BackgroundMode",
        "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
        "pluginId": "cordova-plugin-background-mode",
        "clobbers": [
            "cordova.plugins.backgroundMode",
            "plugin.backgroundMode"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.improvisio.bluetoothserial": "3.0.2",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-yanap": "0.8.9",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-background-mode": "0.7.2"
};
// BOTTOM OF METADATA
});