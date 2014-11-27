cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.nlbhub.phonegap.lua/www/pglua.js",
        "id": "com.nlbhub.phonegap.lua.PhoneGapLua",
        "clobbers": [
            "Lua"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.nlbhub.phonegap.lua": "0.1.0"
}
// BOTTOM OF METADATA
});