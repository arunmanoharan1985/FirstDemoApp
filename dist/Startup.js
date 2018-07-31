System.register(["@angular/platform-browser-dynamic", "./Module/MainModuleLibrary"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, MainModuleLibrary_1, platform;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (MainModuleLibrary_1_1) {
                MainModuleLibrary_1 = MainModuleLibrary_1_1;
            }
        ],
        execute: function () {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(MainModuleLibrary_1.MainModuleLibrary);
        }
    };
});
