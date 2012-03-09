(function () {
    "use strict"

    function updateServerList() {
        var apiKey = settings.getApiKey();

        var url = "https://www.bijk.com/publicapi/servers/key/" + apiKey;
        WinJS.xhr({ url: url }).done(function (response) {
            var results = JSON.parse(response.responseText);
            for (var key in results) {
                var index = parseInt(key);
                var server = results[key];
                data.addServerToList(server.sid, server.hostname);
            }
            data.items.notifyReload();
        }, function () {
            debugger;
        });
    }

    WinJS.Namespace.define("bijkApi", {
        updateServerList: updateServerList,
    });
})();
