function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doOpen(e) {
        var actionBar = e.source.activity.actionBar;
        if (actionBar) {
            actionBar.displayHomeAsUp = true;
            actionBar.onHomeIconItemSelected = function() {
                e.source.close();
            };
            e.source.activity.invalidateOptionsMenu();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.settings = Ti.UI.createWindow({
        backgroundColor: "#222",
        color: "#fff",
        id: "settings",
        title: "Settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    doOpen ? $.__views.settings.addEventListener("open", doOpen) : __defers["$.__views.settings!open!doOpen"] = true;
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "#fff",
        text: "This is where my settings would go if I had any.",
        top: "35",
        id: "__alloyId3"
    });
    $.__views.settings.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.settings!open!doOpen"] && $.__views.settings.addEventListener("open", doOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;