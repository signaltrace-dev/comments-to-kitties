$(document).ready(function(){

var x = true;
enableBrowserAction();

function disableBrowserAction(){
    chrome.browserAction.setIcon({path:"disabled.png"});
    //window.location.reload();
    chrome.tabs.executeScript(null, {file: "toggle_ctk.js"})
}

function enableBrowserAction(){
    chrome.browserAction.setIcon({path:"icon.png"});
    chrome.tabs.executeScript(null, {file: "ctk.js"});
}

function updateState(){
    if(x==false){
        x=true;
        enableBrowserAction();
    }else{
        x=false;
        disableBrowserAction();
    }
}

chrome.browserAction.onClicked.addListener(updateState);
});
