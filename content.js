chrome.runtime.onMessage.addListener(function (request) {
   window.open("https://outline.com/" + request); 
})
