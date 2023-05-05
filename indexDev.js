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
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const url = tabs[0].url;
      localStorage.removeItem(url);
      textArea.value = ''
      console.log('Note cleared')
    })
  }
      // Get the span elements
      const savedMsg = document.getElementById("saved");
      const clearedMsg = document.getElementById("cleared");
      
      // Add event listeners to the buttons
      saveBtn.addEventListener("click", showSavedMsg);
      clearBtn.addEventListener("click", showClearedMsg);
      
      function showSavedMsg() {
        savedMsg.style.display = "block";
        setTimeout(() => {
          savedMsg.style.display = "none";
        }, 1000);
      }
      
      function showClearedMsg() {
        clearedMsg.style.display = "block";
        setTimeout(() => {
          clearedMsg.style.display = "none";
        }, 1000);
      }


})


