

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "jquery-2.2.3.min.js" }, function() {
      chrome.tabs.executeScript(null, { file: "ctk.js" });
  });
});
