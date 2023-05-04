(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector("#note");
  const saveBtn = document.querySelector("#saveBtn");
  const clearBtn = document.querySelector('#clearBtn')

    // Get the current tab's URL
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const url = tabs[0].url;
  
    // Check if there's a note saved for this URL
    const note = localStorage.getItem(url);
    
    // If a note was found, display it in the text area
    if (note) {
      // const textArea = document.querySelector("#note");
      textArea.value = note;
    }
  });
  saveBtn.addEventListener('click', () => {
    const text = textArea.value;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log('Saving note...');
      // Get the URL of the current tab
      const url = tabs[0].url;
      localStorage.setItem(url, text);
      console.log('Note saved');

    });
  })
  
  clearBtn.onclick = () => {
      localStorage.removeItem(key);
      textArea.value = ''
        console.log('Note cleared')
    };
  })



},{}]},{},[1]);
