(function () {
    "use strict"
    var applicationData = Windows.Storage.ApplicationData.current;

    var apiKey = "bijkApiKey";

    WinJS.Namespace.define("settings", {
        getApiKey: function () { return applicationData.roamingSettings.values[apiKey]; },
        setApiKey: function (value) { applicationData.roamingSettings.values[apiKey] = value.trim(); },
    });
})();