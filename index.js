(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector("#note");
  const saveBtn = document.querySelector("#saveBtn");
  const clearBtn = document.querySelector('#clearBtn')

  // Get the full URL of the current tab, use as key for local storage
  let key = chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
    const url = await tabs[0].url;
    (function storeURL(url) {
      key = url;
      console.log(key);
    })(url);
  });
  
  let noteContent = localStorage.getItem(key)
  if(noteContent === null) {
    console.log('Existing note not found, creating new note');
    noteContent = "";
  }
  textArea.value = noteContent;

  saveBtn.onclick = () => {
    console.log('Saving note...');
    try {
      localStorage[key] = textArea.value;
      console.log('Note saved');
    } catch (error) {
      console.log(error)
    }
  }

  clearBtn.onclick = () => {
    localStorage.removeItem(key);
    textArea.value = ''
      console.log('Note cleared')
  };
});
},{}]},{},[1]);
