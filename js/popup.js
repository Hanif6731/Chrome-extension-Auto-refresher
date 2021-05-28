document.addEventListener('DOMContentLoaded', function () {

    var begin = document.getElementById('begin');
    var feedback = document.getElementById('feedback');

    begin.addEventListener('click', function () {
        setInterval(function () {
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        },
        300000
        );
        console.log("activted");

    });

}, false);