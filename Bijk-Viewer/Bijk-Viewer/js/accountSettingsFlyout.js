(function () {
    "use strict";
    var applicationData = Windows.Storage.ApplicationData.current;

    var page = WinJS.UI.Pages.define("/html/accountSettingsFlyout.html", {
        ready: function (element, options) {
            var saveApiKeyButton = document.getElementById("saveApiKeyButton");
            saveApiKeyButton.addEventListener("click", saveApiKey, false);

            var apiKeyInput = document.getElementById("apiKeyInput");
            var apiKey = applicationData.roamingSettings.values["bijkApiKey"];
            if (apiKey) {
                apiKeyInput.value = apiKey
            }
            else {
                apiKeyInput.value = "";
            }
        }
    });

    function saveApiKey() {
        var oldApiKey = applicationData.roamingSettings.values["bijkApiKey"];

        var apiKeyInput = document.getElementById("apiKeyInput");
        applicationData.roamingSettings.values["bijkApiKey"] = apiKeyInput.value;
    }
})();