(function () {
    "use strict";
    var applicationData = Windows.Storage.ApplicationData.current;

    var page = WinJS.UI.Pages.define("/html/accountSettingsFlyout.html", {
        ready: function (element, options) {
            var apiKeyInput = document.getElementById("apiKeyInput");
            apiKeyInput.addEventListener("blur", apiKeyInputBlur, false);

            if ("bijkApiKey" in applicationData.roamingSettings) {
                apiKeyInput.value = "Hi";
            }
            else {
                apiKeyInput.value = "Low";
            }

            window.addEventListener("beforeunload", apiKeyInputBlur);
        }
    });

    function apiKeyInputBlur() {
        debugger;
    }
})();