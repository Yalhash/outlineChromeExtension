document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true},
            function(tabs) {
                var url = tabs[0].url;
                var cutoff = url.indexOf("//");
                var newUrl = url.slice(cutoff+2);
                chrome.tabs.sendMessage(tabs[0].id, newUrl);
            })
    }
}, false)
