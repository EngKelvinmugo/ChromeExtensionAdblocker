chrome.webRequest.onBeforeRequest.addListener(
    function(details){ return {cancel : true}},
    {urls:{defautFilters}},
    ["blocking"]
)
defautFilters=[
    "*://*.zedo.com/*",
    "*://*.partner.googleleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://*.adbrite.com/*",
    "*://*.creative.ak.fbcdn.net/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresesearch.com/*"

]