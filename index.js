(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector("#note");
  const settings = document.querySelector("#settings")
  const saveBtn = document.querySelector("#saveBtn");
  const clearBtn = document.querySelector("#clearBtn")
  const settingsBtn = document.querySelector("#settingsBtn");
  const statusMsg = document.querySelector("status");
  const searchBar = document.querySelector('#searchBar')
  const searchResults = document.querySelector('#searchResults')
  const searchResultsBody = document.querySelector('#searchResultsBody')

  // Get the current tab's URL
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
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
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = tabs[0].url;
      localStorage.removeItem(url);
      textArea.value = ''
      console.log('Note cleared')
    })
  }

  settingsBtn.addEventListener('click', () => {
    switch (settings.style.display) {
      // Settings menu is toggled "OFF"
      case "none":
        settings.style.display = "block"
        note.style.display = "none"
        break;
      // Settings menu is toggled "ON"
      case "block":
        settings.style.display = "none"
        note.style.display = "initial"
        break;
      default:
        settings.style.display = "none"
        note.style.display = "initial"
        break;
    }
  })

  // Add event listeners to the buttons and search bar
  saveBtn.addEventListener("click", showSavedMsg);
  clearBtn.addEventListener("click", showClearedMsg);
  searchBar.addEventListener("input", search)

  function showSavedMsg() {
    statusMsg.style.display = "block";
    statusMsg.innerText = 'Saved'
    setTimeout(() => {
      statusMsg.style.display = "none";
      statusMsg.innerText = ''
    }, 2000);
  }
  function showClearedMsg() {
    statusMsg.style.display = "block";
    statusMsg.innerText = 'Cleared'
    setTimeout(() => {
      statusMsg.style.display = "none";
      statusMsg.innerText = ''
    }, 2000);
  }


  function search(event) {
    if (event.target.value !== '') {
      searchResults.style.display = 'block'
      searchResultsBody.innerHTML = ''

      const results = []
      const searchValue = event.target.value

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)

        if (key.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
            value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
          results.push({ url: key, note: value })
        }
      }
      if (results.length === 0) {
        searchResults.style.display = 'none'
        return
      }

      results.forEach(pair => {
        const result = document.createElement('tr')
        result.innerHTML = `
            <td>${pair.url}</td>
            <td>${pair.note}</td>
          `
        searchResultsBody.appendChild(result)
      })
    } else {
      searchResults.style.display = 'none'
      searchResultsBody.innerHTML = ''
    }
  }
})



},{}]},{},[1]);
