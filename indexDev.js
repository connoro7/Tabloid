document.addEventListener('DOMContentLoaded', () => {
  const textArea = document.querySelector("#note");
  const settings = document.querySelector("#settings")
  const saveBtn = document.querySelector("#saveBtn");
  const clearBtn = document.querySelector("#clearBtn")
  const settingsBtn = document.querySelector("#settingsBtn");
  const statusMsg = document.querySelector("status");

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
      
      // Add event listeners to the buttons
      saveBtn.addEventListener("click", showSavedMsg);
      clearBtn.addEventListener("click", showClearedMsg);
      
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


})


