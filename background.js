'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.contentSettings.plugins.set({
        'primaryPattern': '*://*.cloudhotelli.net/*',
        'setting': 'allow',
        'scope': 'regular'
    });
});
