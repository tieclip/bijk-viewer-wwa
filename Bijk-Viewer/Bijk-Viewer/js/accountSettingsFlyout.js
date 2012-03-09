(function () {
    "use strict";
    var applicationData = Windows.Storage.ApplicationData.current;

    var page = WinJS.UI.Pages.define("/html/accountSettingsFlyout.html", {
        ready: function (element, options) {
            var saveApiKeyButton = document.getElementById("saveApiKeyButton");
            saveApiKeyButton.addEventListener("click", saveApiKey, false);

            var apiKeyInput = document.getElementById("apiKeyInput");
            var apiKey = settings.getApiKey();
            if (apiKey) {
                apiKeyInput.value = apiKey
            }
        }
    });

    function saveApiKey() {
        var oldApiKey = settings.getApiKey();

        var apiKeyInput = document.getElementById("apiKeyInput");
        settings.setApiKey(apiKeyInput.value);
    }
})();